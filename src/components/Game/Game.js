import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
// import GuessList from '../GuessList';
import GuessGrid from '../GuessGrid';
import GameoverBanner from '../GameoverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = React.useState('active');
	const [guesses, setGuesses] = React.useState([]);

	const addGuess = guess => {
		setGuesses([...guesses, guess]);
	};

	return (
		<>
			{/* <GuessList guesses={guesses} /> */}
			<GuessGrid guesses={guesses} />
			<GuessInput answer={answer} guesses={guesses} setGameStatus={setGameStatus} addGuess={addGuess}/>
			{
				gameStatus !== 'active' && <GameoverBanner answer={answer} guessCount={guesses.length} gameStatus={gameStatus} />
			}
		</>
	);
}

export default Game;
