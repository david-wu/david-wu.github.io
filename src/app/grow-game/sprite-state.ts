import {uniqueId} from 'lodash';
import { reverseBreadthFirstBy } from '@utils/index';

export class SpriteState {
  static createSpriteState(type, overrides = {}) {
    const spriteData = {
      ...defaultDataBySpriteType[type],
      ...overrides,
    };
    spriteData.id = uniqueId('Sprite_');
    return spriteData;
  }
}

const compactDataBySpriteType = {
  player: {
    type: 'player',
    subTypes: new Set(['locatable']),
    spriteNumber: 0,
    playerControlled: true,
  },
  chicken: {
    type: 'chicken',
    subTypes: new Set(['monster']),
    spriteNumber: 48,
  },
  monster: {
    type: 'monster',
    subTypes: new Set(['locatable']),
    spriteNumber: 24,
    playerControlled: false,
  },
  locatable: {
    type: 'locatable',  
    subTypes: new Set([]),
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    latestDashTick: 0,
    anchorX: 0.5,
    anchorY: 0.5,
  },
};
// const test = {
//   playerControlled: {
//     latestDashTick: 0,
//   },
//   locatable: {
//     x: 0,
//     y: 0,
//     vx: 0,
//     vy: 0,
//     anchorX: 0.5,
//     anchorY: 0.5,
//   },
//   warmBlooded: {
//     bodyTemp: 0,
//     optimumTemp: 0,
//   },
//   eats: {
//     hunger: 0,
//     foodTypes: [],
//   },
//   senses: {
//     visionR: 100,
//     smellR: 50,
//     soundR: 50,
//   },
// }
function expandSubTypes(dictionary) {
  const allTypes = Object.keys(dictionary);
  const expandedTypes = {};
  reverseBreadthFirstBy(
    {subTypes: allTypes},
    (typeData) => {
      return Array.from(typeData.subTypes).map((subType) => {
        return dictionary[subType];
      });
    },
    (typeData) => {
      const nextSubTypes = [];
      Array.from(typeData.subTypes).forEach((subType) => {
        const subTypeData = expandedTypes[subType];
        nextSubTypes.push(subType);
        nextSubTypes.push(...subTypeData.subTypes);
      });
      expandedTypes[typeData.type] = {
        subTypes: new Set(nextSubTypes),
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        latestDashTick: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        ...typeData,
      }
    }
  )
  return expandedTypes;
}

function expandSubTypes2(dictionary, types, expandedTypes = {}) {
  types = types || Object.keys(dictionary);
  types = Array.from(types)
  for(let i = 0; i < types.length; i++) {
    const type = types[i];
    let typeData = dictionary[type];

    if(!expandedTypes[type] && typeData.subTypes.size){
      expandSubTypes(dictionary, typeData.subTypes, expandedTypes);
    }
    const expandedSubTypeDataList = Array.from(typeData.subTypes).map((subType) => {
      return expandedTypes[subType];
    });
    for(let i = 0; i < expandedSubTypeDataList.length; i++) {
      const expandedSubTypeData = expandedSubTypeDataList[i];
      typeData = {
        ...expandedSubTypeData,
        ...typeData,
        subTypes: new Set([...typeData.subTypes, ...expandedSubTypeData.subTypes]),
      };
    }
    expandedTypes[type] = typeData;
  }
  return expandedTypes;
}
const defaultDataBySpriteType = expandSubTypes(compactDataBySpriteType);

