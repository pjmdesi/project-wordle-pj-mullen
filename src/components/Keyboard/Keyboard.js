import React from 'react';

function Keyboard({ guess, setGuess, guessKeys }) {
	const keyboardLayout = [
		{
			keys: 'QWERTYUIOP',
		},
		{
			keys: 'ASDFGHJKL',
		},
		{
			frontButton: 'ENTER',
			keys: 'ZXCVBNM',
			endButton: '⌫',
		},
	];

	console.log({ guess, guessKeys });

	const backspaceGuess = () => {
		const newGuess = guess.slice(0, -1);
		setGuess(newGuess);
	};

	const addKeyToGuess = key => {
		if (guess.length === 5) return;

		const newGuess = guess + key;
		setGuess(newGuess);
	};

	return (
		<div className="keyboard">
			{keyboardLayout.map(({ keys, frontButton, endButton }) => (
				<div key={keys} className="keyboard-row">
					{frontButton && (
						<button className="keyboard-key" content={frontButton} type="submit">
							{frontButton}
						</button>
					)}
					{[...keys].map(key => (
						<button
                            id={`${key}-key`}
							className={`keyboard-key ${guessKeys[key]}`}
							type="button"
							onClick={() => addKeyToGuess(key)}
							disabled={guessKeys[key] !== 'incorrect' ? '' : 'disbaled'}
							key={`keyboard-key-${key}`}
							onKeyDown={event => {
								if (event.key === 'Backspace') backspaceGuess()
							}}>
							{key}
						</button>
					))}
					{endButton && (
						<button className="keyboard-key" type="button" onClick={backspaceGuess}>
							{endButton}
						</button>
					)}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
