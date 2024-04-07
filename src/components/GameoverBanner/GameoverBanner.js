import React from 'react';

function GameoverBanner({ answer, guessCount, gameStatus }) {
	const bannerType = gameStatus === 'win' ? 'happy ' : 'sad ';
	return (
		<div className={`${bannerType}banner`}>
			{gameStatus === 'win' ? (
				<p>
					Congratulations!<br></br>You got it in{' '}
					<strong>
						{guessCount} guess{guessCount > 1 ? 'es' : ''}
					</strong>
					.
				</p>
			) : (
				<p>
					Sorry!<br></br>The correct answer was: <strong>{answer}</strong>.
				</p>
			)}
		</div>
	);
}

export default GameoverBanner;
