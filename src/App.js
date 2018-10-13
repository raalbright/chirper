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
        {/* Timeline */ }
        <div className="d-flex justify-content-center">
          <ul className="list-group list-group-flush w-50 ">
            { this.state.chirps.map( chirp => (
              <li className="list-group-item" key={ chirp.id }>
                {/* Chirp */ }
                <div className="media">
                  <img src={ chirp.user.avatar } alt={ chirp.user.name } className="mr-3" />
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span>{ chirp.user.name }</span>
                      <span>{ chirp.createdAt.toDateString() }</span>
                    </h5>
                    <p>{ chirp.body }</p>
                  </div>
                </div>
                {/*Chirp*/ }
              </li>
            ) ) }
          </ul>
        </div>
        {/* Timeline */ }
      </div>
    );
  }
}

export default App;
