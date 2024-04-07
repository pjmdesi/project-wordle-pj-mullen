import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessInput({ guesses, addGuess, answer, setGameStatus }) {
	const [guess, setGuess] = React.useState('');

	const submitGuess = event => {
		event.preventDefault();
		console.log({ guess, guesses });

		const guessStatus = checkGuess(guess, answer);

		addGuess({guess, id: crypto.randomUUID(), guessStatus});

		event.target.querySelector('input').value = '';
		setGuess('');

		if (guessStatus.every(({ status }) => status === 'correct')) {
			setGameStatus('win');
		} else if (guesses.length >= 5) {
			setGameStatus('lose');
		}
	};

	const restrictInput = event => {
		const { key, target } = event;

		target.value = target.value.toUpperCase();

		if (guesses.length >= 6 || (key.length === 1 && guess.length > 4) || !key.match(/[a-z]/i)) {
			event.preventDefault();
		} else {
			setGuess(target.value);
		}
	};

	const parseGuessInput = event => {
		const { value } = event.target;
		let newValue = value.toUpperCase();
		event.target.value = newValue;
		setGuess(newValue);
	};

	return (
		<form className="guess-input-wrapper" onSubmit={submitGuess}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input id="guess-input" type="text" onKeyDown={restrictInput} onChange={parseGuessInput} pattern="[a-zA-Z]{5}" disabled={guesses.length === 6 && 'disabled'}/>
		</form>
	);
}

export default GuessInput;
