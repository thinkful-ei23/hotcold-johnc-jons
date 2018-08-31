import React from 'react'

export default function HotCold(props){

    if(props.guess === ''){
        return <h2 id="feedback">Make your Guess!</h2>
    }
    else if(+props.guess === props.correctguess){
        return <h2 id="feedback">You Guessed it!</h2>
    }
    else if(+props.guess - props.correctguess > 10 || props.correctguess - props.guess > 10){
        return <h2 id="feedback">Cold!</h2>
    }
    else if(+props.guess - props.correctguess < 10 || props.correctguess - props.guess < 10){
        return <h2 id="feedback">Hot!</h2>
    }

}