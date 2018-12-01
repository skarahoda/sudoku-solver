import {expect} from 'chai'
import Sudoku from "./Sudoku";

describe('sudoku', () => {
	it('should validate empty sudoku', () => {
		let sudoku = new Sudoku([
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first row is valid', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first row is invalid', () => {
		let sudoku = new Sudoku([
			1, 1, 3, 4, 5, 6, 7, 8, 9,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(false);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first column is valid', () => {
		let sudoku = new Sudoku([
			1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			4, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			7, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			9, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first column is invalid', () => {
		let sudoku = new Sudoku([
			1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			4, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			7, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			9, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(false);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first square is valid', () => {
		let sudoku = new Sudoku([
			1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined,
			4, 5, 6, undefined, undefined, undefined, undefined, undefined, undefined,
			7, 8, 9, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when first square is invalid', () => {
		let sudoku = new Sudoku([
			1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined,
			4, 1, 6, undefined, undefined, undefined, undefined, undefined, undefined,
			7, 8, 9, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		expect(sudoku.isValid()).to.equal(false);
		expect(sudoku.isFull()).to.equal(false);
	});
	it('should validate when all is full and valid', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should validate when all is full and invalid', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
		]);
		expect(sudoku.isValid()).to.equal(false);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve full and valid sudoku', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when first cell of sudoku is missing', () => {
		let sudoku = new Sudoku([
			undefined, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when last cell of sudoku is missing', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, undefined,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when a middle cell of sudoku is missing', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, undefined, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when first two cells of sudoku is missing', () => {
		let sudoku = new Sudoku([
			undefined, undefined, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when last two cells of sudoku is missing', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, undefined, undefined,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when a middle two cells of sudoku is missing', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, undefined, undefined, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve when a middle three hard cells of sudoku is missing', () => {
		let sudoku = new Sudoku([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, undefined, undefined, 2, 3, 4,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, undefined, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve easy sudoku', () => {
		let sudoku = new Sudoku([
			undefined, 4, undefined, undefined, undefined, undefined, 1, 7, 9,
			undefined, undefined, 2, undefined, undefined, 8, undefined, 5, 4,
			undefined, undefined, 6, undefined, undefined, 5, undefined, undefined, 8,
			undefined, 8, undefined, undefined, 7, undefined, 9, 1, undefined,
			undefined, 5, undefined, undefined, 9, undefined, undefined, 3, undefined,
			undefined, 1, 9, undefined, 6, undefined, undefined, 4, undefined,
			3, undefined, undefined, 4, undefined, undefined, 7, undefined, undefined,
			5, 7, undefined, 1, undefined, undefined, 2, undefined, undefined,
			9, 2, 8, undefined, undefined, undefined, undefined, 6, undefined,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve second easy sudoku', () => {
		let sudoku = new Sudoku([
			undefined, undefined, 2, undefined, undefined, undefined, 5, undefined, undefined,
			undefined, 1, undefined, 7, undefined, 5, undefined, 2, undefined,
			4, undefined, undefined, undefined, 9, undefined, undefined, undefined, 7,
			undefined, 4, 9, undefined, undefined, undefined, 7, 3, undefined,
			8, undefined, 1, undefined, 3, undefined, 4, undefined, 9,
			undefined, 3, 6, undefined, undefined, undefined, 2, 1, undefined,
			2, undefined, undefined, undefined, 8, undefined, undefined, undefined, 4,
			undefined, 8, undefined, 9, undefined, 2, undefined, 6, undefined,
			undefined, undefined, 7, undefined, undefined, undefined, 8, undefined, undefined,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve medium sudoku', () => {
		let sudoku = new Sudoku([
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, 8, 5,
			undefined, undefined, undefined, 2, 1, undefined, undefined, undefined, 9,
			9, 6, undefined, undefined, 8, undefined, 1, undefined, undefined,
			5, undefined, undefined, 8, undefined, undefined, undefined, 1, 6,
			undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
			8, 9, undefined, undefined, undefined, 6, undefined, undefined, 7,
			undefined, undefined, 9, undefined, 7, undefined, undefined, 5, 2,
			3, undefined, undefined, undefined, 5, 4, undefined, undefined, undefined,
			4, 8, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
	it('should solve hard sudoku', () => {
		let sudoku = new Sudoku([
				undefined, undefined, undefined, 7, undefined, undefined, 8, undefined, undefined,
				undefined, undefined, 6, undefined, undefined, undefined, undefined, 3, 1,
				undefined, 4, undefined, undefined, undefined, 2, undefined, undefined, undefined,
				undefined, 2, 4, undefined, 7, undefined, undefined, undefined, undefined,
				undefined, 1, undefined, undefined, 3, undefined, undefined, 8, undefined,
				undefined, undefined, undefined, undefined, 6, undefined, 2, 9, undefined,
				undefined, undefined, undefined, 8, undefined, undefined, undefined, 7, undefined,
				8, 6, undefined, undefined, undefined, undefined, 5, undefined, undefined,
				undefined, undefined, 2, undefined, undefined, 6, undefined, undefined, undefined,
			]);
		sudoku.solve();
		expect(sudoku.isValid()).to.equal(true);
		expect(sudoku.isFull()).to.equal(true);
	});
});