import * as PIXI from 'pixi.js'
import {uniqueId, get, set} from 'lodash';

// todo: instead of using new Map(), use uniqueid
interface Map {
	id: string;
	grid: number[][];
}

export class LandGenerator {

	mapsByGeoIndex = {};
	containersByMap = new Map<any, PIXI.Container>();
	containersInPixi = new Set<PIXI.Container>();
	readonly invertedDirections = {
		0: 2,
		1: 3,
		2: 0,
		3: 1,
		4: 6,
		5: 7,
		6: 4,
		7: 5,
	};

	constructor(
		public textureList,
		public landContainer = new PIXI.Container(),
	) {}

	ensureVisibleMaps(y: number, x: number) {
		const geoIndex = this.getGeoIndex(y, x);
		const currentMap = this.getMap(geoIndex);
		this.getAdjacentGeoIndices(geoIndex).forEach((adjacentGeoIndex) => {
			if(!this.getMap(adjacentGeoIndex)) {
				this.createSeededMap(adjacentGeoIndex);
			}
		});
		const visibleMaps = [
			currentMap,
			...this.getAdjacentMaps(geoIndex),
		];
		this.setVisibleMaps(visibleMaps);
	}

	setVisibleMaps(visibleMaps) {
		const nextContainers = visibleMaps.map((visibleMap) => {
			return this.containersByMap.get(visibleMap);
		});
		const nextContainerSet = new Set<PIXI.Container>(nextContainers);

		this.containersInPixi.forEach((containerOnMap) => {
			if(!nextContainerSet.has(containerOnMap)) {
				this.containersInPixi.delete(containerOnMap);
				this.landContainer.removeChild(containerOnMap);
			}
		});
		nextContainerSet.forEach((nextContainer) => {
			if(!this.containersInPixi.has(nextContainer)) {
				this.landContainer.addChild(nextContainer);	
				this.containersInPixi.add(nextContainer);
			}
		});		
	}

	getGeoIndex(y: number, x: number): [number, number] {
		return [Math.floor(y / 640), Math.floor(x / 960)];
	}

	getMap(geoIndex) {
		return get(this.mapsByGeoIndex, geoIndex);
	}

	getAdjacentGeoIndices(geoIndex, cardinalOnly = false) {
		const adjacentGeoIndices = [];
		for(let direction = 0; direction < (cardinalOnly ? 4 : 8); direction++) {
			adjacentGeoIndices.push(this.getRelativeGeoIndex(geoIndex, direction));
		}
		return adjacentGeoIndices;
	}

	getAdjacentMaps(geoIndex, cardinalOnly = false) {
		return this.getAdjacentGeoIndices(geoIndex, cardinalOnly)
			.map((adjacentGeoIndex, direction) => {
				return this.getMap(this.getRelativeGeoIndex(geoIndex, direction));
			});
	}

	getRelativeGeoIndex(pos, direction) {
		switch(direction) {
			case 0:
				return [pos[0] - 1, pos[1]];
			case 1:
				return [pos[0], pos[1] + 1];
			case 2:
				return [pos[0] + 1, pos[1]];
			case 3:
				return [pos[0], pos[1] - 1];
			case 4:
				return [pos[0] - 1, pos[1] - 1];
			case 5:
				return [pos[0] - 1, pos[1] + 1];
			case 6:
				return [pos[0] + 1, pos[1] + 1];
			case 7:
				return [pos[0] + 1, pos[1] - 1];
		}
	}

	// Uses any adjacentMaps to seed the borders
	// Also seeds itself
	createSeededMap(geoIndex) {

		// create map grid with a border for seeding
		const seededMap = this.createEmptyGrid(22, 32);
		this.fillGrid(seededMap, 20);
		this.seedTiles(seededMap);

		// map with border is larger
		// borders will be rotated and inserted starting at these locations
		const borderAttachmentPointsByDirection = {
			0: [0, 1],
			1: [1, 31],
			2: [31, 30],
			3: [30, 0],
		};

		const cardinalAdjacentMaps = this.getAdjacentMaps(geoIndex, true);
		cardinalAdjacentMaps.forEach((adjacentMap, direction) => {
			if(!adjacentMap) {
				return;
			}
			const adjacentBorder = this.getBorder(adjacentMap, direction, true);
			this.insertGrid(
				seededMap,
				adjacentBorder,
				borderAttachmentPointsByDirection[direction],
				direction,
			);
		});

		for(let i = 0; i < 100; i++) {
			this.ageTiles(seededMap);
		}

		for(let direction = 0; direction < 4; direction++) {
			this.removeFirstRowOrColumn(seededMap, direction);
		}

		// inserts grid into Pixi
		this.addMapToPixi(seededMap, geoIndex);

		return seededMap;
	}

	addMapToPixi(map, geoIndex) {
		const pos = this.getPosFromGeoIndex(geoIndex);
		const container = this.getContainer(map, 32);
		container.x = pos.x;
		container.y = pos.y;
		this.containersByMap.set(map, container);
		set(this.mapsByGeoIndex, geoIndex, map);
	}

	getPosFromGeoIndex(geoIndex) {
		return {
			y: geoIndex[0] * 640,
			x: geoIndex[1] * 960,
		};
	}

	// Gets the border row/column of the map
	getBorder(map, direction, invertDirections = false) {
		direction = invertDirections ? this.invertedDirections[direction] : direction;
		switch(direction) {
			case 0:
				return [...map[0]];
			case 1:
				return map.map((row) => {
					return row[row.length - 1];
				});
			case 2:
				return [...map[map.length - 1]];
			case 3:
				return map.map((row) => {
					return row[0];
				});
		}
		throw('only cardinal directions have borders');
	}

	removeFirstRowOrColumn(map, direction) {
		if (direction === 0) {
			map.pop();
		}
		if (direction === 1) {
			map.forEach((row) => {
				row.shift();
			});
		}
		if (direction === 2) {
			map.shift();
		}
		if (direction === 3) {
			map.forEach((row) => {
				row.pop();
			});
		}		
	}

	createBackgroundGrid() {
		const backgroundGrid = this.createEmptyGrid(20, 30);
		this.fillGrid(backgroundGrid, 509);
		this.insertGrid(backgroundGrid, tree1.image, [3, 3]);
		this.insertGrid(backgroundGrid, tree2.image, [8, 4]);
		this.insertGrid(backgroundGrid, tree3.image, [12, 2]);
		this.insertGrid(backgroundGrid, stump1.image, [12, 8]);
    // this.insertGrid(backgroundGrid, door.image, [12, 12]);
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

	createEmptyGrid(height, width) {
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

	// inserts content into a grid at position [y, x]
	// rotation can be applied to insert
	insertGrid(grid, insert, position, rotation = 0) {
		const [y, x] = position;
		for(let i = 0; i < insert.length; i++) {
			for(let j = 0; j < insert[i].length; j++){
				if (rotation === 0) {
					grid[y+i][x+j] = insert[i][j];					
				}
				if (rotation === 1) {
					grid[y+j][x-i] = insert[i][j];					
				}
				if (rotation === 2) {
					grid[y-i][x-j] = insert[i][j];					
				}
				if (rotation === 3) {
					grid[y+j][x+i] = insert[i][j];					
				}
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
					grid[i][j] = 2100;
				}
				if(Math.random() < 0.005) {
					grid[i][j] = 141;
				}
			}
		}
	}


	// doesn't account for seeded map borders
	ageTiles(grid) {
		for(let i = 0; i < grid.length-0; i++) {
			for(let j = 0; j < grid[i].length-0; j++) {
				const tileValue = grid[i][j];
				this.spreadCardinalTileCheck(grid, i, j, 207);
				this.spreadCardinalTileCheck(grid, i, j, 2100);
				this.spreadCardinalTileCheck(grid, i, j, 141);
			}
		}		
	}

	spreadCardinalTileCheck(grid, i, j, tileId, spreadChance = 0.05) {
		if(grid[i][j] === tileId) {
			if(Math.random() < spreadChance) {
				const cardinalTileIndex = Math.floor(Math.random() * 4);
				const tileShift = cardinalTilePositions[cardinalTileIndex];
				const nextI = i + tileShift[0];
				const nextJ = j + tileShift[1];
				if(!grid[nextI] || !grid[nextI][nextJ]) {
					return;
				}
				grid[nextI][nextJ] = tileId;
			}
		}
	}

}
const cardinalTilePositions = [
	[-1, 0],
	[0, -1],
	[0, 1],
	[1, 0],
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