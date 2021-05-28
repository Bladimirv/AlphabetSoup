import { AlphabetSoup } from "./AlphabetSoup";

const exampleMatrix = [
    ['O', 'I', 'E'],
    ['I', 'I', 'X'],
    ['E', 'X', 'E']
];

var alphabetSoup = new AlphabetSoup(exampleMatrix);
console.log(`Results: ${alphabetSoup.playSoup()}`);

//Run unit tests to view all cases