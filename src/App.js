import React, { Component } from 'react';
import Header from 'header';
import Grid from 'grid';
import memeArray from 'memearray';
import Score from 'score';

class App extends Component {

  state= {
    memeArray,
    score: 0
  }

  shuffleArray = () =>{
    let beenClicked = this.state.beenClicked;
    let score = this.state.score;
    const shuffle = require('shuffle-array');

    shuffle(memeArray);

    if(beenClicked === false) {
      beenClicked = true

      function increment(){
        score += 1;
      };
      increment();
    }
    else if(beenClicked === true) {
      function reset(){
        score = 0;
      }
      reset();

      memeArray.beenClicked = false;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Score />
        <Grid />
      </div>
    );
  }
  
}

export default App;
