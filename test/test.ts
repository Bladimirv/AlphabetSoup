import { AlphabetSoup } from "../src/AlphabetSoup";
import { expect } from 'chai';

// output => 3
const threeXthree = [
	['O', 'I', 'E'],
	['I', 'I', 'X'],
	['E', 'X', 'E']
];

// output => 4
const oneXten = [
	['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O']
];

// output => 8
const fivexfive = [
	['E', 'A', 'E', 'A', 'E'],
	['A', 'I', 'I', 'I', 'A'],
	['E', 'I', 'O', 'I', 'E'],
	['A', 'I', 'I', 'I', 'A'],
	['E', 'A', 'E', 'A', 'E'],
];

// output => 3
const sevenXtwo = [
	['O', 'X'],
	['I', 'O'],
	['E', 'X'],
	['I', 'I'],
	['O', 'X'],
	['I', 'E'],
	['E', 'X'],
];

// output => 0
const oneXone = [['E']];

describe('Sopa de letras' , () => {
	it('prueba 3x3 => Se espera 3', () => {
		var alphabetSoup = new AlphabetSoup(threeXthree);
		expect(alphabetSoup.playSoup()).to.equal(3);
	});

	it('prueba 1x10 => Se espera 4', () => {
		var alphabetSoup = new AlphabetSoup(oneXten);
		expect(alphabetSoup.playSoup()).to.equal(4);
	});

	it('prueba 5x5 => Se espera 8', () => {
		var alphabetSoup = new AlphabetSoup(fivexfive);
		expect(alphabetSoup.playSoup()).to.equal(8);
	});

	it('prueba 7x2 => Se espera 3', () => {
		var alphabetSoup = new AlphabetSoup(sevenXtwo);
		expect(alphabetSoup.playSoup()).to.equal(3);
	});

	it('prueba 0x0 => Se espera 0', () => {
		var alphabetSoup = new AlphabetSoup(oneXone);
		expect(alphabetSoup.playSoup()).to.equal(0);
	});
});
