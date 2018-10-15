import React, { Component } from 'react';
import { makeChirp } from './data/makeChirp';
import { Timeline } from "./components/Chirps";

class App extends Component {
  state = {
    chirps: Array.from( { length: 10 }, makeChirp )
  };

  render () {
    return (
      <div className="container">
        <Timeline chirps={ this.state.chirps } />
      </div>
    );
  }
}

export default App;
