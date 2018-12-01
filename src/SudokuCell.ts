const strings = require('node-strings');

export default class SudokuCell {
	public readonly isPredefined: boolean;
	constructor(public value?: number){
		this.isPredefined = value !== undefined
	}
	public toString(): string {
		return this.isPredefined
			? strings.blue(this.value)
			: strings.green(String(this.value) || ' ')
	}
}