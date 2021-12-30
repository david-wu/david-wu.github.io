
export class LandGenerator {
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

	static createEmptyGrid(height = 30, width = 20) {
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

	static insertGrid(targetGrid, insert, y, x) {
		for(let i = 0; i < insert.length; i++) {
			for(let j = 0; j < insert[i].length; j++){
				targetGrid[y+i][x+j] = insert[i][j];
			}
		}
	}
}

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