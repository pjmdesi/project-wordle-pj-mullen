import React from 'react';

function GameoverBanner({ answer, guessCount, gameStatus, restartGame }) {
	const bannerType = gameStatus === 'win' ? 'happy ' : 'sad ';
	return (
		<div className={`${bannerType}banner`}>
			{gameStatus === 'win' ? (
				<div>
					<h2>Congratulations!</h2>You got it in{' '}
					<strong>
						{guessCount} guess{guessCount > 1 ? 'es' : ''}
					</strong>
					.
				</div>
			) : (
				<div>
					<h2>Sorry!</h2>The correct answer was: <strong>{answer}</strong>.
				</div>
			)}
			<br></br>
			<button className="keyboard-key" onClick={restartGame}>
				{gameStatus === 'win' ? 'Play Again!' : 'Start Over'}
			</button>
		</div>
	);
}

export default GameoverBanner;
