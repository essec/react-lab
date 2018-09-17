import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";

class App extends Component {
  render(){
    return(
      <div>
        <CharacterCard value='h'/>
        <CharacterCard value='i'/>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
        }
        <div>
          <WordCard value="hello"/>
        </div>
      </div>
    );
  }
}

export default App;
