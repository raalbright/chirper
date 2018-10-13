import React, { Component } from 'react';
import { makeChirp } from './data/makeChirp';

class App extends Component {
  state = {
    chirps: Array.from( { length: 10 }, makeChirp )
  };

  render () {
    return (
      <div className="container">
        <h1>Timeline</h1>
      </div>
    );
  }
}

export default App;
