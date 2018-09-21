import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';


const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: "",
        completed: false,
        lose: false
    }
}
export default class WordCard extends Component{
    
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        // console.log(`${c}`)
        let guess = "" + this.state.guess + c
        
        if(this.state.attempt < 6){ 
            this.setState({guess})
            if(guess.length == this.state.chars.length){
                if(guess == this.state.word){
                this.setState({guess: "", completed: true})
                }
                else{
                this.setState({guess: "", attempt: this.state.attempt + 1})
                if(this.state.attempt == 5)
                    this.setState({lose: true})
                }
            }
            // console.log(this.state)
            // console.log("guess: "+ guess)
            // console.log("word : "+ this.state.word  )
            // console.log("status: " + this.state.completed)
        }
    }
    
    render() {
        return(
            <div className="App">
                <div>
                {Array.from(this.state.chars).map((c, i)=> <CharacterCard value={c} 
                                                            key={i} 
                                                            activationHandler={this.activationHandler} 
                                                            attempt={this.state.attempt} 
                                                            left_attempt={this.state.left_attempt}
                                                            completed={this.state.completed}/>)}
                </div>
                <div className="score">
                    <h3>Attempt = {6-this.state.attempt}</h3>
                <br></br>
                <h1>{this.state.lose? "You Lose" : ""}</h1>
                <h1>{this.state.complete? "You Win" : ""}</h1>
                </div>
            </div>
        );
    }
}
