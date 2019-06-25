import React, { Component } from 'react';
import Header from './components/header';
import Grid from './components/grid';
import memeArray from './components/memearray';
import Score from './components/score';

class App extends Component {

  state = {
    memeArray: memeArray,
    score: 0
  }

  shuffleArray = event => {
    //let score = this.state.score;
    const clicked = event.target.dataset.clicked;
    const img = event.target.dataset.img;

    let beenclicked;
    if (clicked === "false") {
      beenclicked = false;
    }
    else {
      beenclicked = true;
    }
    const shuffle = require('shuffle-array');

    let memeArray = this.state.memeArray;
    shuffle(memeArray);
    this.setState({ memeArray: memeArray });

    if (beenclicked === false) {
      console.log("increment")
      beenclicked = true

      for (let i = 0; i < this.state.memeArray.length; i++) {
        if (memeArray[i].img === img) {
          memeArray[i].clicked = true;
        }
      }

      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
    }
    else if (beenclicked === true) {
      console.log("dont increment")
      this.setState({ score: 0 });

      for(let i = 0; i < this.state.memeArray.length; i++) {
        memeArray[i].clicked = false;
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Score
          score={this.state.score}
        />
        <Grid
          shuffleArray={this.shuffleArray}
          memeArray={this.state.memeArray}
        />
      </div>
    );
  }

}

export default App;
