

[
	[5,1,2,3],
	[5,1,2,3],
	[5,1,2,3],
]

[]

enum TransformFunc {
	CLIP_SPOTTY_DATA = 'CLIP_SPOTTY_DATA';
	SUBTRACT = 'SUBTRACT';
}


class DataTransform {
	static transform(transforms, dataByName) {

	}
}




[
	{
		name: 'root',
		transform: TransformFunc.SUBTRACT,
		transformParams: {
		},
		args: [
			'clipped',
			'data2',
		],
	},
	{
		name: 'clipped',
		transform: TransformFunc.CLIP_SPOTTY_DATA,
		transformParams: {
		},
		args: [
			'data1',
			'data2',
		],
	},
]




