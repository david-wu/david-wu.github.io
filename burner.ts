/** @param {NS} ns **/
export async function main(ns) {
    ns.disableLog('ALL');

    const host = ns.getHostname();
    const hostRam = ns.getServerMaxRam(host);
    const hostScriptCap = Math.floor(hostRam / 1.75);

    let availableScriptCap = hostScriptCap;
    let uid = 0;
    const target = ns.args[0] || 'omega-net';

    ns.print('init weaken and grow..');
    await Promise.all([
        fullyWeaken(target),
        batchGrow(target),
    ]);

    while(true){
        while(availableScriptCap > 2000) {
            ns.print('availableScriptCap: ', availableScriptCap);
            printCheck(target);
            batchHack(target);
            await ns.sleep(5000);
        }
        await ns.sleep(1000);
    }

    function estimateBatchHackThreads() {
        return Math.floor(3.53956835 * (0.35 / ns.hackAnalyze(target))) * 1.15;
    }


    async function batchHack(target) {
        const times = [
            ns.getHackTime(target),
            ns.getGrowTime(target),
            ns.getWeakenTime(target),
        ];

        const hackedPerThread = ns.hackAnalyze(target);
        const hackThreads = Math.floor(0.35 / hackedPerThread);

        const currentMoney = ns.getServerMoneyAvailable(target);
        const moneyHacked = (hackedPerThread * hackThreads) * currentMoney;
        const maxMoney = ns.getServerMaxMoney(target);
        const expectedMoney = currentMoney - moneyHacked;
        const growthNeeded = (maxMoney / expectedMoney);
        const growthThreads = getThreadsToGrow(target, growthNeeded);

        const securityLostFromGrowth = ns.growthAnalyzeSecurity(growthThreads);
        const securityLostFromHack = ns.hackAnalyzeSecurity(hackThreads);
        
        // const promises = [];

        const totalSecLost = securityLostFromHack + securityLostFromGrowth;
        weakenBy(target, totalSecLost);

        const growTimeDelta = times[2] - times[1];
        growBy(target, growthNeeded, growTimeDelta - 100);

        const hackTimeDelta = times[2] - times[0];
        runScript('hk-hack.js', hackThreads, target, ns.getHackTime(target), hackTimeDelta - 200);

        await Promise.all(promises);
    }

    function printCheck(target) {
        const cashRatio = ns.getServerMoneyAvailable(target) / ns.getServerMaxMoney(target);
        const secOverMin = ns.getServerSecurityLevel(target) - ns.getServerMinSecurityLevel(target)
        ns.print('printCheck:')
        ns.print(`    cashRatio: ${cashRatio}`);
        ns.print(`    secOverMin: ${secOverMin}`);
    }

    // grow an amount without consequences by first doing a weaken
    async function batchGrow(target, growthNeeded) {
        growthNeeded = growthNeeded || growthNeededToFullyGrow(target);
        const times = [
            ns.getHackTime(target),
            ns.getGrowTime(target),
            ns.getWeakenTime(target),
        ];

        if(!growthNeeded) {
            return;
        }
        const growthThreads = getThreadsToGrow(target, growthNeeded);
        const securityIncreased = ns.growthAnalyzeSecurity(growthThreads);

        const timeDelta = times[2] - times[1];

        ns.print(`batchGrow ${growthNeeded}, ${growthThreads}, ${securityIncreased}, ${timeDelta}`);

        weakenBy(target, securityIncreased);
        await ns.sleep(timeDelta - 100);
        await growBy(target, growthNeeded);
    }


    async function fullyGrow(target) {
        const growthToMax = growthNeededToFullyGrow(target);
        await growBy(target, growthToMax);
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
    async function growBy(target, growAmount, delay = 0) {
        // const desiredThreads = getThreadsToGrow(target, growAmount);
        // let ranThreads = 0;
        // while(ranThreads < desiredThreads) {
            // const growThreads = Math.min(availableScriptCap, desiredThreads);
            // ranThreads += growThreads;
        //     await runScript('hk-grow.js', growThreads, target, ns.getGrowTime(target), delay);
        // }
        await runScript(
            'hk-grow.js',
            getThreadsToGrow(target, growAmount),
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
        const weakenNeeded = getWeakenNeeded(target);
        await weakenBy(target, weakenNeeded);
    }
    function getWeakenNeeded(target) {
        return ns.getServerSecurityLevel(target) - ns.getServerMinSecurityLevel(target);
    }
    async function weakenBy(target, amountToWeaken, delay = 0) {
        // const desiredThreads = getThreadsToWeaken(amountToWeaken)
        // let ranThreads = 0;
        // while(ranThreads < desiredThreads) {
        //     const weakenThreads = Math.min(availableScriptCap, desiredThreads);
        //     ranThreads += weakenThreads;
            // await runScript('hk-weaken.js', weakenThreads, target, ns.getWeakenTime(target), delay)
        // }

        await runScript(
            'hk-weaken.js',
            getThreadsToWeaken(amountToWeaken),
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
        return new Promise((resolve) => {
            ns.exec(scriptName, host, threads, target, delay, uid++);
            availableScriptCap -= threads;
            // includes a 50ms buffer
            setTimeout(resolve, timeout + delay + 50);
        })
            .then(() => {
                availableScriptCap += threads;
            });
    }

}