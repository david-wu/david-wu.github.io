import * as PIXI from 'pixi.js'



export class FastMesh {

  getFastMesh(tileMapData) {
    const {mapWidth, mapHeight, shader} = this.createMapShader(
      hardMap,
      tileMapData,
    );
    shader.uniforms.view = [
      0,
      0,
      mapHeight,
      mapWidth,
    ];
    const geometry = new PIXI.Geometry().addAttribute(
      'position',
      [ -1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1 ],
    );

    return {
      mesh: new PIXI.Mesh(geometry, shader),
      shader,
    };
  }

  createMapShader(mapData, tileData) {
    const mapWidth = mapData[0].length;
    const mapHeight =  mapData.length;
    const map = PIXI.BaseTexture.fromBuffer(parseMap(mapData) , mapWidth, mapHeight);
    const tiles = PIXI.Texture.from(tileData);
    tiles.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    tiles.baseTexture.mipmap = false;
    const shader = PIXI.Shader.from(vert, frag, {
      map,
      tiles,
      tileSize: [16.0, 16.0],
      mapSize: [16.0, 16.0],
      view:[0,0,0,0],
    });
    return {
      shader,
      map,
      mapWidth,
      mapHeight,
    };
  }

}

const hardMap = [
  [[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[6,6],[7,6],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[0,0],[1,0],[1,0],[2,0],[1,11],[1,11],[1,11],[6,6],[7,6],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[0,1],[1,1],[1,1],[2,1],[1,11],[1,11],[1,11],[6,6],[8,8],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[0,1],[1,1],[0,3],[5,2],[1,11],[13,12],[13,12],[6,6],[7,6],[6,9],[1,11],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[0,1],[1,1],[2,1],[1,11],[1,11],[13,15],[13,15],[6,6],[7,6],[7,6],[6,9],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[0,2],[1,2],[2,2],[1,11],[1,11],[14,2],[15,2],[6,6],[7,6],[7,6],[7,6],[6,9],[8,5],[1,11],[1,11]],
  [[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[6,6],[8,8],[7,6],[7,6],[7,6],[8,6],[1,11],[1,11]],
  [[4,5],[2,5],[0,5],[1,5],[2,5],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[8,9],[6,9],[8,5],[1,11]],
  [[2,8],[3,9],[4,9],[4,6],[3,9],[5,0],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[8,8],[8,6],[1,11]],
  [[4,7],[4,7],[4,8],[5,8],[2,9],[3,9],[4,5],[2,5],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[6,9],[8,5]],
  [[1,11],[1,11],[3,7],[4,7],[4,8],[5,9],[5,8],[0,9],[2,5],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[6,9]],
  [[1,11],[1,11],[1,11],[1,11],[0,7],[4,8],[4,6],[4,6],[5,1],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6]],
  [[1,11],[9,0],[10,0],[8,0],[1,11],[3,7],[1,7],[1,7],[5,7],[1,11],[1,11],[1,11],[1,11],[6,7],[7,7],[7,7]],
  [[1,11],[9,1],[11,3],[11,1],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11]],
  [[1,11],[9,2],[7,2],[11,2],[1,11],[1,11],[1,11],[2,12],[1,13],[1,13],[1,13],[1,13],[1,13],[1,13],[0,12],[1,11]],
  [[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[2,10],[3,10],[3,10],[3,10],[3,10],[3,10],[3,10],[0,10],[1,11]],
];


const frag = `
      precision mediump float;
      uniform sampler2D map, tiles;
      uniform vec2 mapSize, tileSize;
      varying vec2 pixelLoc;
      void main() {
        vec2 tileCoord = floor(255.0 * texture2D(map, floor(pixelLoc) / mapSize).ra);
        gl_FragColor = texture2D(tiles, (tileCoord + fract(pixelLoc)) / tileSize);
      }`;

const vert = `
      precision mediump float;
      attribute vec2 position;
      uniform vec4 view;
      varying vec2 pixelLoc;
      void main() {
        pixelLoc = mix(view.xw, view.zy, 0.5 * (1.0 + position));
        gl_Position = vec4(position, 1, 1);
      }`;

const parseMap = (map) => {
  const data = [];
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      data[count++] = map[i][j][0];
      data[count++] = 0
      data[count++] = 0;
      data[count++] = map[i][j][1];
    }
  }
  return new Uint8Array(data);
}
