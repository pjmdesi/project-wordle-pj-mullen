import React from 'react';

function GuessInput({ addGuess }) {
	const [guess, setGuess] = React.useState('');

	const submitGuess = event => {
		event.preventDefault();
		console.log({ guess });
    addGuess(guess);
    
		if (guess.length) {
			event.target.querySelector('input').value = '';
      setGuess('');
		}
	};

	const restrictInput = event => {
		const { key, target } = event;

    target.value = target.value.toUpperCase();

		if ((key.length === 1 && guess.length > 4) || !key.match(/[a-z]/i)) {
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
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" onKeyDown={restrictInput} onChange={parseGuessInput} pattern='[a-zA-Z]{5}' />
    </form>
  );
}

export default GuessInput;
