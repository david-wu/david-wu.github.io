import * as PIXI from 'pixi.js'

export class LandGenerator {

	containersByMapMatrix = new Map();

	constructor(
		public textureList,
		public landContainer = new PIXI.Container(),
	) {}

	/**
	 * Extends a seeded mapMatrix by attaching a section of the old mapMatrix to the extension and aging
	 * Maps will get their positions adjusted later
	 */
	addSeededMapAttachment(mapMatrix, direction = 0) {
		const seededMap = this.createEmptyGrid();
		this.fillGrid(seededMap, 20);
		this.seedTiles(seededMap);
		if(direction === 0) {
			const oldTopRow = [...mapMatrix[0]];
			seededMap.push(oldTopRow);
		}
		for(let i = 0; i < 100; i++) {
			this.ageTiles(seededMap);
		}
		if(direction === 0) {
			seededMap.pop();
		}
		const container = this.getContainer(seededMap, 32);

		const originalContainer = this.containersByMapMatrix.get(mapMatrix);
		container.x = originalContainer.x
		container.y = originalContainer.y - 640;
		this.landContainer.addChild(container);
		this.containersByMapMatrix.set(seededMap, container);
	}

	createSeededMap() {
		const seededMapMatrix = this.createSeededMapMatrix();
		const seededMapContainer = this.getContainer(seededMapMatrix, 32);
		this.landContainer.addChild(seededMapContainer);
		this.containersByMapMatrix.set(seededMapMatrix, seededMapContainer);
		return seededMapMatrix;
	}

	createSeededMapMatrix() {
		const seededMap = this.createEmptyGrid();
		this.fillGrid(seededMap, 20);
		this.seedTiles(seededMap);
		for(let i = 0; i < 100; i++) {
			this.ageTiles(seededMap);			
		}
		return seededMap;
	}

	createBackgroundGrid() {
		const backgroundGrid = this.createEmptyGrid();
		this.fillGrid(backgroundGrid, 509);
		this.insertGrid(backgroundGrid, tree1.image, 3, 3);
		this.insertGrid(backgroundGrid, tree2.image, 8, 4);
		this.insertGrid(backgroundGrid, tree3.image, 12, 2);
		this.insertGrid(backgroundGrid, stump1.image, 12, 8);
    this.insertGrid(backgroundGrid, door.image, 12, 12);
		return backgroundGrid;
	}

  getContainer(map, tileSize = 16) {
    const container = new PIXI.Container();
    for(let i = 0; i < map.length; i++) {
      const row = map[i];
      for(let j = 0; j < row.length; j++) {
        const tileValue = map[i][j];
        const sprite = new PIXI.Sprite(this.textureList[tileValue]);
        sprite.y = i * tileSize;
        sprite.x = j * tileSize;
        container.addChild(sprite);
      }
    }
    return container;
  }

	createEmptyGrid(height = 20, width = 30) {
		const grid = []
		for(let i = 0; i < height; i++) {
			grid.push(new Array(width))
		}
		return grid;
	}

	fillGrid(grid, value) {
		for(let i = 0; i < grid.length; i++) {
			for(let j = 0; j < grid[i].length; j++) {
				grid[i][j] = value;
			}
		}
	}

	insertGrid(grid, insert, y, x) {
		for(let i = 0; i < insert.length; i++) {
			for(let j = 0; j < insert[i].length; j++){
				grid[y+i][x+j] = insert[i][j];
			}
		}
	}

	seedTiles(grid) {
		for(let i = 0; i < grid.length; i++) {
			for(let j = 0; j < grid[i].length; j++) {
				if(Math.random() < 0.005) {
					grid[i][j] = 207;
				}
				if(Math.random() < 0.005) {
					grid[i][j] = 202;
				}
				if(Math.random() < 0.005) {
					grid[i][j] = 141;
				}
			}
		}
	}

	ageTiles(grid) {
		for(let i = 1; i < grid.length-1; i++) {
			for(let j = 1; j < grid[i].length-1; j++) {
				const tileValue = grid[i][j];
				const adjacentTiles = this.getAdjacentTiles(grid, i, j);
				this.spreadCardinalTileCheck(grid, i, j, 207);
				this.spreadCardinalTileCheck(grid, i, j, 202);
				this.spreadCardinalTileCheck(grid, i, j, 141);
			}
		}		
	}

	spreadCardinalTileCheck(grid, i, j, tileId, spreadChance = 0.05) {
		if(grid[i][j] === tileId) {
			if(Math.random() < spreadChance) {
				const cardinalTileIndex = Math.floor(Math.random() * 4);
				const tileShift = cardinalTilePositions[cardinalTileIndex];
				grid[i + tileShift[0]][j + tileShift[1]] = tileId;
			}
		}
	}

	getAdjacentTiles(grid, i, j) {
		return [
			[grid[i-1][j-1], grid[i-1][j-0], grid[i-1][j+1]],
			[grid[i][j-1], grid[i][j-0], grid[i][j+1]],
			[grid[i+1][j-1], grid[i+1][j-0], grid[i+1][j+1]],
		];
	}

	getAdjacentTilePos(index: number) {

	}

}
const cardinalTilePositions = [
	[-1, 0],
	[0, -1],
	[0, 1],
	[1, 0],
];

const tilePositions = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 0],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1],
];


const door = {
  image: [
    [531, 532, 533],
    [561, 562, 563],
  ],
}

const tree1 = {
  z: [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9],
    [0, 0, 9],
  ],
	image: [
	  [800, 801, 802],
	  [830, 831, 832],
	  [860, 861, 862],
	  [890, 891, 509],
	],
	collision: [
	  [0, 0, 0],
	  [0, 0, 0],
	  [0, 0, 0],
	  [1, 1, 0],
	],
};

const tree2 = {
	image: [
	  [833, 834, 835],
	  [863, 864, 865],
	  [893, 894, 895],
	  [509, 924, 509],
	],
	collision: [
	  [0, 0, 0],
	  [0, 0, 0],
	  [0, 0, 0],
	  [0, 1, 0],
	],
};

const tree3 = {
	image: [
	  [509, 921, 922, 923],
	  [950, 951, 952, 953],
	  [980, 981, 982, 983],
	  [509, 1011, 1012, 509],
	  [509, 1041, 1042, 509],
	],
	collision: [
	  [0, 0, 0, 0],
	  [0, 0, 0, 0],
	  [0, 0, 0, 0],
	  [0, 1, 1, 0],
	],
};

const stump1 = {
	image: [
		[1130, 1131, 1132],
		[1160, 1161, 1162],
		[1190, 1191, 509],
	],
	collision: [
		[1, 1, 1],
		[1, 1, 1],
		[1, 1, 0],
	],
};