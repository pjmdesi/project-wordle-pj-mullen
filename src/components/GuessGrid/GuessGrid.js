import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessGrid({ guesses }) {
	const parseCellStatus = ([row, col]) => {
		let cellStatus = '';

		if (guesses[row]) {
			// console.log(guesses[row], row === 0, col);
			guesses[row].guessStatus[col] && (cellStatus = guesses[row].guessStatus[col].status);
		}

		return cellStatus.length ? ` ${cellStatus}` : '';
	};

	return (
		<div className="guess-results">
			{Array(NUM_OF_GUESSES_ALLOWED)
				.fill()
				.map((_, row) => (
					<div key={`grid-row-${row}`} className="guess">
						{Array(5)
							.fill()
							.map((_, col) => (
								<div key={`grid-cell-${col}`} className={`cell${parseCellStatus([row, col])}`}>
									{guesses[row] && guesses[row].guess[col]}
								</div>
							))}
					</div>
				))}
		</div>
	);
}

export default GuessGrid;
