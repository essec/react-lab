import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";

class App extends Component {
  render(){
    return(
      <div>
<<<<<<< HEAD
        <div>
          <WordCard value={word}/>
        </div>
=======
        <WordCard value= {word}/>
>>>>>>> dd920025c4d1aec150ec7701d84ddeb687709196
      </div>
    );
  }
}

export default App;
