import * as PIXI from 'pixi.js'
import {each, mapValues} from 'lodash';

export class ResourceLoader {

  static async loadTextures() {
    const {resources} = await ResourceLoader.loadResources();
    return mapValues(textureSplitParamsIndex, (key, textureSplitParams) => {
      return ResourceLoader.splitTextureSet(resources[key], ...textureSplitParams);
    });
  }

	static async loadResources(assetPaths = gameAssetPaths) {
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

  static splitTextureSet(tileSetImgTexture, tileSize, width, height) {
    const tileSet = [];
    for(let i = 0; i < width * height; i++) {
      const x = i % width;
      const y = Math.floor(i / width);
      tileSet[i] = new PIXI.Texture(
        tileSetImgTexture,
        new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
      );
    }
    return tileSet;
  }

}

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
  hyp1: [32, 30, 30],
  hyp2: [32, 30, 30],
  hyp3: [32, 30, 30],
  // bunny: [],
  characters: [32, 23, 4],
  // tileMap: [],
  // platformerTileSetImg: [],
  rpgItems: [16, 13, 14],
};
