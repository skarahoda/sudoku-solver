import Sudoku from "./Sudoku";


const sudokuParams = [
	[
		undefined, 4, undefined, undefined, undefined, undefined, 1, 7, 9,
		undefined, undefined, 2, undefined, undefined, 8, undefined, 5, 4,
		undefined, undefined, 6, undefined, undefined, 5, undefined, undefined, 8,
		undefined, 8, undefined, undefined, 7, undefined, 9, 1, undefined,
		undefined, 5, undefined, undefined, 9, undefined, undefined, 3, undefined,
		undefined, 1, 9, undefined, 6, undefined, undefined, 4, undefined,
		3, undefined, undefined, 4, undefined, undefined, 7, undefined, undefined,
		5, 7, undefined, 1, undefined, undefined, 2, undefined, undefined,
		9, 2, 8, undefined, undefined, undefined, undefined, 6, undefined,
	],
	[
		undefined, undefined, 2, undefined, undefined, undefined, 5, undefined, undefined,
		undefined, 1, undefined, 7, undefined, 5, undefined, 2, undefined,
		4, undefined, undefined, undefined, 9, undefined, undefined, undefined, 7,
		undefined, 4, 9, undefined, undefined, undefined, 7, 3, undefined,
		8, undefined, 1, undefined, 3, undefined, 4, undefined, 9,
		undefined, 3, 6, undefined, undefined, undefined, 2, 1, undefined,
		2, undefined, undefined, undefined, 8, undefined, undefined, undefined, 4,
		undefined, 8, undefined, 9, undefined, 2, undefined, 6, undefined,
		undefined, undefined, 7, undefined, undefined, undefined, 8, undefined, undefined,
	],
	[
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 8, 5,
		undefined, undefined, undefined, 2, 1, undefined, undefined, undefined, 9,
		9, 6, undefined, undefined, 8, undefined, 1, undefined, undefined,
		5, undefined, undefined, 8, undefined, undefined, undefined, 1, 6,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		8, 9, undefined, undefined, undefined, 6, undefined, undefined, 7,
		undefined, undefined, 9, undefined, 7, undefined, undefined, 5, 2,
		3, undefined, undefined, undefined, 5, 4, undefined, undefined, undefined,
		4, 8, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
	],
	[
		undefined, undefined, undefined, 7, undefined, undefined, 8, undefined, undefined,
		undefined, undefined, 6, undefined, undefined, undefined, undefined, 3, 1,
		undefined, 4, undefined, undefined, undefined, 2, undefined, undefined, undefined,
		undefined, 2, 4, undefined, 7, undefined, undefined, undefined, undefined,
		undefined, 1, undefined, undefined, 3, undefined, undefined, 8, undefined,
		undefined, undefined, undefined, undefined, 6, undefined, 2, 9, undefined,
		undefined, undefined, undefined, 8, undefined, undefined, undefined, 7, undefined,
		8, 6, undefined, undefined, undefined, undefined, 5, undefined, undefined,
		undefined, undefined, 2, undefined, undefined, 6, undefined, undefined, undefined,
	]
];

for (let sudokuParam of sudokuParams) {
	let sudoku = new Sudoku(sudokuParam);
	sudoku.solve();
	sudoku.printCells();
	console.log(sudoku.isValid() ? 'sudoku is solved 🎉' : 'sudoku couldn\'t solved 😞');
	console.log()
	console.log()
	console.log()
}