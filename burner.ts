/** @param {NS} ns **/
export async function main(ns) {
    ns.disableLog('ALL');

    const host = ns.getHostname();
    const hostRam = ns.getServerMaxRam(host);
    const scriptCap = Math.floor(hostRam / 1.75);

    let availableScriptCap = scriptCap;
    let uid = 0;
    const target = ns.args[0] || 'omega-net';

    ns.print('init weaken and grow..');
    await Promise.all([
        fullyWeaken(target),
        batchGrow(target),
    ]);
    ns.print('done..');

    while(true){
        log({
            availableScripts: `${availableScriptCap}/${scriptCap}`,
        }, 'batchHacking');
        while(availableScriptCap > 2000) {
            log({
                availableScripts: `${availableScriptCap}/${scriptCap}`,
            }, 'batchHacking');
            printCheck(target);
            batchHack(target);
            await ns.sleep(3000);
        }
        await ns.sleep(1000);
    }

    function batchHack(target) {
        const hackedPerThread = ns.hackAnalyze(target);
        const hackThreads = Math.floor(0.20 / hackedPerThread);
        const currentMoney = ns.getServerMoneyAvailable(target);
        const moneyHacked = hackedPerThread * hackThreads * currentMoney;
        const expectedMoney = currentMoney - moneyHacked;
        const growthNeeded = (ns.getServerMaxMoney(target) / expectedMoney);
        const growthThreads = getThreadsToGrow(target, growthNeeded);

        const securityLostFromGrowth = ns.growthAnalyzeSecurity(growthThreads);
        const securityLostFromHack = ns.hackAnalyzeSecurity(hackThreads);
        
        const runTimes = {
            weaken: ns.getWeakenTime(target),
            grow: ns.getGrowTime(target),
            hack: ns.getHackTime(target),
        };

        const totalSecLost = securityLostFromHack + securityLostFromGrowth;
        const weakenThreads = getThreadsToWeaken(totalSecLost)
        runWeaken(target, weakenThreads);

        const growTimeDelta = runTimes.weaken - runTimes.grow - 50;
        runGrow(target, growthThreads, growTimeDelta);

        const hackTimeDelta = runTimes.weaken - runTimes.hack - 100;
        runHack(target, hackThreads, hackTimeDelta);
    }


    // grow an amount without consequences by first doing a weaken
    async function batchGrow(target) {
        const growthNeeded =  growthNeededToFullyGrow(target);
        if(!growthNeeded) {
            return;
        }

        const threadsToFullyGrow = getThreadsToGrow(target, growthNeeded);
        const willFullyGrow = (threadsToFullyGrow <= availableScriptCap * 0.5);
        const growthThreads = Math.min(
            threadsToFullyGrow,
            availableScriptCap * 0.5,
        );
        const securityIncreased = ns.growthAnalyzeSecurity(growthThreads);
        const weakenThreads = getThreadsToWeaken(securityIncreased);
        const timeDelta = ns.getWeakenTime(target) - ns.getGrowTime(target) - 100;

        log({
            growthNeeded,
            growthThreads,
            securityIncreased,
            willFullyGrow,
        }, 'batchGrow');

        runWeaken(target, weakenThreads);
        await runGrow(target, growthThreads, timeDelta);
        if(!willFullyGrow) {
            await batchGrow(target);
        }
    }

    async function runHack(target, hackThreads, delay = 0) {
        await runScript(
            'hk-hack.js',
            hackThreads,
            target,
            ns.getHackTime(target),
            delay,
        );
    }

    function growthNeededToFullyGrow(target) {
        const maxMoney = ns.getServerMaxMoney(target);
        if(maxMoney === 0) {
            return 0;
        }
        const serverMoney = ns.getServerMoneyAvailable(target);
        if(serverMoney >= maxMoney) {
            return 0;
        }
        return 1 / (serverMoney / maxMoney);
    }

    async function runGrow(target, growThreads, delay = 0) {
        await runScript(
            'hk-grow.js',
            growThreads,
            target,
            ns.getGrowTime(target),
            delay,
        );
    }
    function getThreadsToGrow(target, growAmount) {
        if(growAmount === 0) {
            return 0;
        }
        return Math.ceil(ns.growthAnalyze(target, growAmount));
    }

    async function fullyWeaken(target) {
        const weakenNeeded = ns.getServerSecurityLevel(target) - ns.getServerMinSecurityLevel(target);
        if(!weakenNeeded) {
            return;
        }
        const weakenThreads = getThreadsToWeaken(weakenNeeded);
        await runWeaken(target, weakenThreads);
    }
    async function runWeaken(target, threads, delay = 0) {
        await runScript(
            'hk-weaken.js',
            threads,
            target,
            ns.getWeakenTime(target),
            delay,
        );
    } 
    function getThreadsToWeaken(amountToWeaken, minT = 0, maxT = 100000) {
        let i = 0
        while(i++ < 50) {
            const midT = Math.ceil((minT + maxT) / 2);
            const weakenAmount = ns.weakenAnalyze(midT);
            if(Math.abs(weakenAmount - amountToWeaken) < 0.1) {
                return midT + 1;
            }
            if(midT === (maxT - 1)) {
                return maxT;
            }
            if (weakenAmount < amountToWeaken) {
                minT = midT;
            } else {
                maxT = midT;
            }
        }
    }

    function runScript(scriptName, threads, target, timeout, delay = 0) {
        const now = ns.getTimeSinceLastAug();
        return new Promise((resolve) => {
            ns.exec(scriptName, host, threads, target, delay, now+delay, uid++);
            availableScriptCap -= threads;
            // includes a 50ms buffer
            setTimeout(resolve, timeout + delay + 50);
        })
            .then(() => {
                availableScriptCap += threads;
            });
    }

    function printCheck(target) {
        const cashRatio = ns.getServerMoneyAvailable(target) / ns.getServerMaxMoney(target);
        const secOverMin = ns.getServerSecurityLevel(target) - ns.getServerMinSecurityLevel(target)
        log({
            cashRatio,
            secOverMin,
        }, 'printCheck')
    }

    function log(attrs, title) {
        if(title) {
            ns.print(`${title}:`);
        }
        Object.keys(attrs).forEach((key) => {
            ns.print(`    ${key}: ${attrs[key]}`);
        });
    }

}