import * as PIXI from 'pixi.js'
import {flatten, each, mapValues} from 'lodash';

export class ResourceLoader {

  static async loadTextures() {
    const {resources} = await ResourceLoader.loadResources();
    const textureIndex = mapValues(textureSplitParamsIndex, (textureSplitParams, key) => {
      return ResourceLoader.splitTextureSet(resources[key].texture, textureSplitParams);
    });
    return flatten(assetNames.map((assetName) => textureIndex[assetName]));
  }

	static async loadResources(assetPaths = gameAssetPaths): Promise<{loader: any, resources: any}>{
    const loader = new PIXI.Loader();
    each(assetPaths, (value, key) => {
      loader.add(key, value);
    });
    return new Promise((resolve, reject) => {
      loader.load((loader, resources) => {
        resolve({loader, resources});
      });
    });
  }

  static splitTextureSet(tileSetImgTexture, splitParams): PIXI.Texture[] {
    const tileSet = [];
    for(let i = 0; i < splitParams.width * splitParams.height; i++) {
      const x = i % splitParams.width;
      const y = Math.floor(i / splitParams.width);
      tileSet[i] = new PIXI.Texture(
        tileSetImgTexture,
        new PIXI.Rectangle(
          x * splitParams.tileSize,
          y * splitParams.tileSize,
          splitParams.tileSize,
          splitParams.tileSize,
        )
      );
    }
    return tileSet;
  }
}

const assetNames = [
  'hyp1',
  'hyp2',
  'hyp3',
  'characters',
  'rpgItems',
];

const gameAssetPaths = {
  hyp1: 'assets/images/grow-game/hyptosis_tile-art-batch-1.png',
  hyp2: 'assets/images/grow-game/hyptosis_tile-art-batch-2.png',
  hyp3: 'assets/images/grow-game/hyptosis_tile-art-batch-3.png',
  // bunny: 'assets/images/grow-game/bunny.png',
  characters: 'assets/images/grow-game/characters.png',
  // tileMap: 'assets/images/grow-game/tiles.png',
  // platformerTileSetImg: 'assets/images/grow-game/nature-platformer-tileset.png',
  rpgItems: 'assets/images/grow-game/roguelikeitems.png',
};
const textureSplitParamsIndex = {
  hyp1: {
    tileSize: 32,
    width: 30,
    height: 30,
  },
  hyp2: {
    tileSize: 32,
    width: 30,
    height: 30,
  },
  hyp3: {
    tileSize: 32,
    width: 30,
    height: 30,
  },
  characters: {
    tileSize: 32,
    width: 23,
    height: 4,
  },
  rpgItems: {
    tileSize: 16,
    width: 13,
    height: 14,
  },
};
