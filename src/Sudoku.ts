import SudokuCell from "./SudokuCell";
import findLastIndex from "lodash/findLastIndex"

export default class Sudoku {
	private readonly cells: Array<SudokuCell>;

	constructor(cells: (number | undefined)[]) {
		this.cells = cells.map((cell: number | undefined) => new SudokuCell(cell));
	}

	public printCells() {
		for (let xBlocks = 0; xBlocks < 3; xBlocks++) {
			for (let x = xBlocks; x < 9; x += 3) {
				console.log(
					this.tripleToString(9 * x),
					' | ',
					this.tripleToString(9 * x + 3),
					' | ',
					this.tripleToString(9 * x + 6));
			}
			if (xBlocks < 2) {
				console.log('-------+---------+-------')
			}
		}
	}

	private tripleToString(i: number) {
		return this.cells
			.slice(i, i + 3)
			.map(cell => cell.toString())
			.join(' ')
	}


	public isValid(): boolean {
		return this.cells.map(this.isCellValid).every(value => value);
	}


	public isFull(): boolean {
		return this.cells.map((cell) => cell.value !== undefined)
			.every(value => value);
	}

	public solve() {
		let i = 0;
		let wentBack = false;
		while (i < 81) {
			const cell = this.cells[i];
			if (wentBack || !this.isCellSolved(cell, i)) {
				do {
					wentBack = false;
					cell.value = (cell.value || 0) + 1;
					if (cell.value === 10) {
						cell.value = undefined;
						wentBack = true;
						i = this.findPrevSolvedIndex(i - 1);
					}
				} while (!wentBack && (cell.value === undefined || !this.isCellValid(cell, i)))
			}
			else {
				i++;
			}
		}
	}

	private findPrevSolvedIndex(index: number) {
		return findLastIndex(this.cells, (cell) => !cell.isPredefined, index);
	}

	private isCellSolved(cell: SudokuCell, index: number) {
		return cell.isPredefined || (cell.value !== undefined && this.isCellValid(cell, index));
	}


	private isCellValid = (cell: SudokuCell, index: number): boolean => {
		const x = Sudoku.getXOfIndex(index);
		const y = Sudoku.getYOfIndex(index);
		const square = Sudoku.getSquareOfIndex(index);
		const value = cell.value;
		return value === undefined
			|| (
				this.isRowValidForValue(y, value)
				&& this.isColumnValidForValue(x, value)
				&& this.isSquareValidForValue(square, value)
			)
	};

	private isColumnValidForValue(x: number, value: number): boolean {
		return this.cells
			.filter((cell, index) =>
				cell.value === value && Sudoku.getXOfIndex(index) === x)
			.length < 2;

	}

	private isRowValidForValue(y: number, value: number): boolean {
		return this.cells
			.filter((cell, index) =>
				cell.value === value && Sudoku.getYOfIndex(index) === y)
			.length < 2;

	}

	private isSquareValidForValue(square: number, value: number): boolean {
		return this.cells
			.filter((cell, index) => cell.value === value &&
				Sudoku.getSquareOfIndex(index) === square)
			.length < 2;

	}

	private static getSquareOfIndex(index: number): number {
		const x = Sudoku.getXOfIndex(index);
		const y = Sudoku.getYOfIndex(index);
		return ((x / 3) >> 0) + ((y / 3) >> 0) * 3;
	}

	private static getXOfIndex(index: number): number {
		return index % 9;
	}

	private static getYOfIndex(index: number): number {
		return (index / 9) >> 0;
	}
}
