import React from 'react';

import GuessForm from './guess-form';
import HotCold from './hotcold';
import './guess-section.css';


export default class GuessSection extends React.Component {


    render(){
        return (
            <section>
                <HotCold guess={this.props.guess} correctguess={this.props.correctGuess}/>
                <GuessForm 
                    guess={guess=>this.props.currentGuess(guess)} 
                    pastguess={guess=>this.props.onNewGuess(guess)}
                    pastGuesses={this.props.pastGuesses}/>
            </section>
        );
    }

}

