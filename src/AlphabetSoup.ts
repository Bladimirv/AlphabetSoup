export interface IAlphabetSoup {
	playSoup(): number;
}

export class AlphabetSoup implements IAlphabetSoup {
	private firstLetter = 'O';
	private secondLetter = 'I';
	private thirdLetter = 'E';
	private selectedMatrix: string[][];
	
	public constructor(matrix: string[][]) {
		this.selectedMatrix = matrix;
	}

	playSoup(): number {
		if (this.selectedMatrix.length === 0) {
			return 0
		}

		let firstLetterPositions = [];
		var arrayLengthY = this.selectedMatrix.length;
		var arrayLengthX = this.selectedMatrix[0].length;
		for (let i = 0; i < arrayLengthY; i++) {
			for (let j = 0; j < arrayLengthX; j++) {
				const element = this.selectedMatrix[i][j];
				if (element === this.firstLetter) {
					firstLetterPositions.push([i, j]);
				}
			}
		}
		return this.scanDirections(firstLetterPositions, [arrayLengthY, arrayLengthX]);
	}

	private scanDirections(positions: number[][], dimensions: number[]): number {
		const dimY = dimensions[0];
		const dimX = dimensions[1];		
		let match = 0;

		for (let i = 0; i < positions.length; i++) {
			let matrix = positions[i];
			let selectedDimensions = [];

			//filter qty by dimensions of the matrix
			if (dimY >= 3) {
				selectedDimensions.push(this.searchMatrix((matrix[0] + 1), matrix[1], (matrix[0] + 2), matrix[1] ),  // vertical
										this.searchMatrix((matrix[0] - 1), matrix[1], (matrix[0] - 2), matrix[1])); // verticalInverted
			}
			if (dimX >= 3) {
				selectedDimensions.push(this.searchMatrix(matrix[0], (matrix[1] + 1), matrix[0], (matrix[1] + 2)), // horizontal
										this.searchMatrix(matrix[0], (matrix[1] - 1), matrix[0], (matrix[1] - 2))); // horizontalInverted
			}
			if (dimY >= 3 && dimX >= 3) {
				selectedDimensions.push(this.searchMatrix((matrix[0] - 1), (matrix[1] - 1), (matrix[0] - 2), (matrix[1] - 2)),  // diagonalLeftUp
										this.searchMatrix((matrix[0] - 1), (matrix[1] + 1), (matrix[0] - 2), (matrix[1] + 2)), // diagonalRightUp
										this.searchMatrix((matrix[0] + 1), (matrix[1] - 1), (matrix[0] + 2), (matrix[1] - 2)),  // diagonalLeftDown
										this.searchMatrix((matrix[0] + 1), (matrix[1] + 1), (matrix[0] + 2), (matrix[1] + 2))); // diagonalRightDown
			}
			for (let j = 0; j < selectedDimensions.length; j++) {
				match = match + selectedDimensions[j]
			}
		}
		return match;
	}

	private searchMatrix(Idx1: number, Idx2: number, Idx3: number, Idx4: number) {
		try {
			if (this.selectedMatrix[Idx1][Idx2] === this.secondLetter &&
				this.selectedMatrix[Idx3][Idx4] === this.thirdLetter) {
				return 1;
			}
			return 0;
		} catch (err) {
			return 0;
		}
	}
}

