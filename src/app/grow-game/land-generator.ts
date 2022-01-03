
export class LandGenerator {
	static createSeededMap() {
		const seededMap = LandGenerator.createEmptyGrid();
		LandGenerator.fillGrid(seededMap, 20);
		LandGenerator.seedTiles(seededMap);
		for(let i = 0; i < 100; i++) {
			LandGenerator.ageTiles(seededMap);			
		}
		return seededMap;
	}

	static createBackgroundGrid() {
		const backgroundGrid = LandGenerator.createEmptyGrid();
		LandGenerator.fillGrid(backgroundGrid, 509);
		LandGenerator.insertGrid(backgroundGrid, tree1.image, 3, 3);
		LandGenerator.insertGrid(backgroundGrid, tree2.image, 8, 4);
		LandGenerator.insertGrid(backgroundGrid, tree3.image, 12, 2);
		LandGenerator.insertGrid(backgroundGrid, stump1.image, 12, 8);
    LandGenerator.insertGrid(backgroundGrid, door.image, 12, 12);
		return backgroundGrid;
	}

	static createEmptyGrid(height = 20, width = 30) {
		const grid = []
		for(let i = 0; i < height; i++) {
			grid.push(new Array(width))
		}
		return grid;
	}

	static fillGrid(grid, value) {
		for(let i = 0; i < grid.length; i++) {
			for(let j = 0; j < grid[i].length; j++) {
				grid[i][j] = value;
			}
		}
	}

	static insertGrid(grid, insert, y, x) {
		for(let i = 0; i < insert.length; i++) {
			for(let j = 0; j < insert[i].length; j++){
				grid[y+i][x+j] = insert[i][j];
			}
		}
	}

	static seedTiles(grid) {
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

	static ageTiles(grid) {
		for(let i = 1; i < grid.length-1; i++) {
			for(let j = 1; j < grid[i].length-1; j++) {
				const tileValue = grid[i][j];
				const adjacentTiles = LandGenerator.getAdjacentTiles(grid, i, j);
				LandGenerator.spreadCardinalTileCheck(grid, i, j, 207);
				LandGenerator.spreadCardinalTileCheck(grid, i, j, 202);
				LandGenerator.spreadCardinalTileCheck(grid, i, j, 141);
			}
		}		
	}

	static spreadCardinalTileCheck(grid, i, j, tileId, spreadChance = 0.05) {
		if(grid[i][j] === tileId) {
			if(Math.random() < spreadChance) {
				const cardinalTileIndex = Math.floor(Math.random() * 4);
				const tileShift = cardinalTilePositions[cardinalTileIndex];
				grid[i + tileShift[0]][j + tileShift[1]] = tileId;
			}
		}
	}

	static getAdjacentTiles(grid, i, j) {
		return [
			[grid[i-1][j-1], grid[i-1][j-0], grid[i-1][j+1]],
			[grid[i][j-1], grid[i][j-0], grid[i][j+1]],
			[grid[i+1][j-1], grid[i+1][j-0], grid[i+1][j+1]],
		];
	}

	static getAdjacentTilePos(index: number) {

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