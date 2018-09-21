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
        left_attempt: 5,
        guess: "",
        completed: false
    }
}
export default class WordCard extends
Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        // console.log(`${c}`)
        let guess = "" + this.state.guess + c
        
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess == this.state.word){
            this.setState({guess: "", completed: true})
            }
            else{
            this.setState({guess: "", attempt: this.state.attempt + 1, left_attempt: this.state.left_attempt - 1})

            }
        }
        // console.log(this.state)
        console.log("guess: "+ guess)
        console.log("word : "+ this.state.word  )
        console.log("status: " + this.state.completed)
    }

    
    render() {
        return(
            <div>
                <div>
                {Array.from(this.state.chars).map((c, i)=> <CharacterCard value={c} 
                                                            key={i} 
                                                            activationHandler={this.activationHandler} 
                                                            attempt={this.state.attempt} 
                                                            left_attempt={this.state.left_attempt}
                                                            completed={this.state.completed}/>)}
                </div>
                <div className="score">
                attempt = {this.state.attempt}
                <br></br>
                your attempt left = {this.state.left_attempt}
                </div>
            </div>
        );
    }
}
