import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export const {Provider:InfoProvider, Consumer: InfoConsumer} = React.createContext({info:false,infoChange:()=>{}})

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state={
            correctGuess: Math.floor(Math.random() * 100) + 1,
            pastGuesses:[],
            guess:'',
            info:false
        }
    }

    onNewGuess(guess){
        this.setState({
            pastGuesses:[...this.state.pastGuesses,guess]
        })
    }
    changeGuess(guess){
        this.setState({
            guess
        })
    }

    newGame(){
        this.setState({
            pastGuesses:[],
            guess:'',
            correctGuess: Math.floor(Math.random() * 100) + 1
        })
    }

    infoPage(toggle){
        this.setState({
            info:toggle
        })
    }
    //new comm
    render(){
        return (
            <div>
                <InfoProvider value={{info:this.state.info,infoChange:this.infoPage.bind(this)}} > 
                    <Header newGame={()=>this.newGame()} />
                </InfoProvider>
                <GuessSection  
                    correctGuess={this.state.correctGuess} 
                    currentGuess={guess=>this.changeGuess(guess)} 
                    onNewGuess={guess =>this.onNewGuess(guess)}
                    guess={this.state.guess}
                    pastGuesses={this.state.pastGuesses}/>
                <GuessCount count={this.state.pastGuesses.length} />
                <GuessList guesses={this.state.pastGuesses} />
            </div>
        );
    }

}

