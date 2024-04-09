import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import GameoverBanner from '../GameoverBanner';

// To make debugging easier, we'll log the solution in the console.

function Game() {
    const [answer, setAnswer] = React.useState(sample(WORDS));
	const [gameStatus, setGameStatus] = React.useState('active');
	const [guesses, setGuesses] = React.useState([]);
    const [guessKeys, setGuessKeys] = React.useState({
        A: 'unplayed',
        B: 'unplayed',
        C: 'unplayed',
        D: 'unplayed',
        E: 'unplayed',
        F: 'unplayed',
        G: 'unplayed',
        H: 'unplayed',
        I: 'unplayed',
        J: 'unplayed',
        K: 'unplayed',
        L: 'unplayed',
        M: 'unplayed',
        N: 'unplayed',
        O: 'unplayed',
        P: 'unplayed',
        Q: 'unplayed',
        R: 'unplayed',
        S: 'unplayed',
        T: 'unplayed',
        U: 'unplayed',
        V: 'unplayed',
        W: 'unplayed',
        X: 'unplayed',
        Y: 'unplayed',
        Z: 'unplayed',
    });

    console.info({ answer });

	const addGuess = guess => {
		const newGuessesList = [...guesses, guess];
		setGuesses(newGuessesList);
        return newGuessesList;
	};

    const restartGame = () => {
        console.log('restarting game');
        setGameStatus('active');
        setAnswer(sample(WORDS));
        setGuesses([]);
        setGuessKeys({
            A: 'unplayed',
            B: 'unplayed',
            C: 'unplayed',
            D: 'unplayed',
            E: 'unplayed',
            F: 'unplayed',
            G: 'unplayed',
            H: 'unplayed',
            I: 'unplayed',
            J: 'unplayed',
            K: 'unplayed',
            L: 'unplayed',
            M: 'unplayed',
            N: 'unplayed',
            O: 'unplayed',
            P: 'unplayed',
            Q: 'unplayed',
            R: 'unplayed',
            S: 'unplayed',
            T: 'unplayed',
            U: 'unplayed',
            V: 'unplayed',
            W: 'unplayed',
            X: 'unplayed',
            Y: 'unplayed',
            Z: 'unplayed',
        });
    }

	return (
		<>
			<GuessGrid guesses={guesses} />
			<GuessInput answer={answer} guesses={guesses} setGameStatus={setGameStatus} addGuess={addGuess} guessKeys={guessKeys} setGuessKeys={setGuessKeys} />
			{
				gameStatus !== 'active' && <GameoverBanner answer={answer} guessCount={guesses.length} gameStatus={gameStatus} restartGame={restartGame} />
			}
		</>
	);
}

export default Game;
