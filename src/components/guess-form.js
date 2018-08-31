import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    let input;

    const onGuess = submitEvent => {
        console.log(props.pastGuesses)
        submitEvent.preventDefault()
        if (props.pastGuesses.includes(input.value)){
            console.log('Already guessed That number');
            input.value=''
        }
        else if(+input.value > 0 && +input.value< 101){
            props.guess(input.value)
            props.pastguess(input.value)
            input.value=''
        } 
        else{
            console.log('please enter valid number');
            input.value=''
        }
    }

    return (
        <form onSubmit={onGuess}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required
                ref={e=> input= e}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

