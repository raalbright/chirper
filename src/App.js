import React, { Component } from 'react';
import { makeChirp } from './data/makeChirp';
import { Timeline } from "./components/Chirps";
import Chirpform from "./components/ChirpForm";

class App extends Component {
  state = {
    chirps: Array.from( { length: 10 }, makeChirp )
  };

  handleSubmit = event => {
    event.preventDefault();
    console.dir( event.target );
    const form = new FormData( event.target );
    const chirp = {
      user: {
        name: form.get( 'userName' )
      },
      body: form.get( 'body' ),
      createdAt: new Date(),
      id: ( Math.random() * 10000 )
    }
    this.setState( {
      chirps: [ chirp, ...( this.state.chirps ) ]
    } )
  }

  render () {
    return (
      <div className="container">
        <a className="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          New Chirp
        </a>
        <div className="collapse mb-2 bg-white p-4 mt-2 w-50" id="collapseExample">
          <Chirpform onSubmit={ this.handleSubmit } />
        </div>
        <Timeline chirps={ this.state.chirps } />
      </div>
    );
  }
}

export default App;
