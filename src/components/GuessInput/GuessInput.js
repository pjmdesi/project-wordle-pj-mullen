import React from 'react';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, addGuess, answer, setGameStatus, setGuessKeys, guessKeys }) {
	const [guess, setGuess] = React.useState('');

	const submitGuess = event => {
		event.preventDefault();
		console.log({ guess, guesses, guessKeys });

		const guessStatus = checkGuess(guess, answer);

		const newGuessesList = addGuess({ guess, id: crypto.randomUUID(), guessStatus });

		const newGuessKeys = { ...guessKeys };

		for (let l of guessStatus) {
			console.log({ l });
			if (newGuessKeys[l.letter] !== 'correct') {
				if (newGuessKeys[l.letter] !== 'misplaced') {
					if (l.status === 'incorrect') {
						newGuessKeys[l.letter] = 'incorrect';
					}
				}
				if (l.status === 'misplaced') {
					newGuessKeys[l.letter] = 'misplaced';
				}
			}
			if (l.status === 'correct') {
				newGuessKeys[l.letter] = 'correct';
			}
		}

		setGuessKeys(newGuessKeys);

		setGuess('');

		if (guess === answer) {
			setGameStatus('win');
		} else if (newGuessesList.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lose');
		}
	};

	const restrictInput = event => {
		const { key, target } = event;

		if (!key.match(/[a-z]/i)) {
            event.preventDefault();
		} else {

            target.value = target.value.toUpperCase();
            let keyButton = document.querySelector(`.keyboard-key#${key.toUpperCase()}-key`);

			if ((key.length === 1 && guess.length > 4) || !key.match(/[a-z]/i)) {
				event.preventDefault();
			} else if (keyButton && guessKeys[key.toUpperCase()] === 'incorrect') {
				event.preventDefault();

				if (keyButton) {
					keyButton.classList.add('jiggle');
					setTimeout(() => {
						keyButton.classList.remove('jiggle');
					}, 500);
				}
			} else {
				if (keyButton) {
					keyButton.classList.add('highlight');
					setTimeout(() => {
						keyButton.classList.remove('highlight');
					}, 500);
				}

				setGuess(target.value);
			}
		}
	};

	const parseGuessInput = event => {
		const { value } = event.target;
		setGuess(value.toUpperCase());
	};

	return (
		<form className="guess-input-wrapper" onSubmit={submitGuess}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				id="guess-input"
				type="text"
				value={guess}
				onKeyDown={restrictInput}
				onChange={parseGuessInput}
				pattern="[a-zA-Z]{5}"
				title="Please enter a 5-letter word."
				disabled={guesses.length === 6 && 'disabled'}
			/>
            <br></br>
			<Keyboard guess={guess} setGuess={setGuess} guessKeys={guessKeys} />
		</form>
	);
}

export default GuessInput;
