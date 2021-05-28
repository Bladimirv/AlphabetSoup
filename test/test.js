"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlphabetSoup_1 = require("../src/AlphabetSoup");
var chai_1 = require("chai");
// output => 3
var threeXthree = [
    ['O', 'I', 'E'],
    ['I', 'I', 'X'],
    ['E', 'X', 'E']
];
// output => 4
var oneXten = [
    ['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O']
];
// output => 8
var fivexfive = [
    ['E', 'A', 'E', 'A', 'E'],
    ['A', 'I', 'I', 'I', 'A'],
    ['E', 'I', 'O', 'I', 'E'],
    ['A', 'I', 'I', 'I', 'A'],
    ['E', 'A', 'E', 'A', 'E'],
];
// output => 3
var sevenXtwo = [
    ['O', 'X'],
    ['I', 'O'],
    ['E', 'X'],
    ['I', 'I'],
    ['O', 'X'],
    ['I', 'E'],
    ['E', 'X'],
];
// output => 0
var oneXone = [['E']];
describe('Sopa de letras', function () {
    it('prueba 3x3 => Se espera 3', function () {
        var alphabetSoup = new AlphabetSoup_1.AlphabetSoup(threeXthree);
        chai_1.expect(alphabetSoup.playSoup()).to.equal(3);
    });
    it('prueba 1x10 => Se espera 4', function () {
        var alphabetSoup = new AlphabetSoup_1.AlphabetSoup(oneXten);
        chai_1.expect(alphabetSoup.playSoup()).to.equal(4);
    });
    it('prueba 5x5 => Se espera 8', function () {
        var alphabetSoup = new AlphabetSoup_1.AlphabetSoup(fivexfive);
        chai_1.expect(alphabetSoup.playSoup()).to.equal(8);
    });
    it('prueba 7x2 => Se espera 3', function () {
        var alphabetSoup = new AlphabetSoup_1.AlphabetSoup(sevenXtwo);
        chai_1.expect(alphabetSoup.playSoup()).to.equal(3);
    });
    it('prueba 0x0 => Se espera 0', function () {
        var alphabetSoup = new AlphabetSoup_1.AlphabetSoup(oneXone);
        chai_1.expect(alphabetSoup.playSoup()).to.equal(0);
    });
});
