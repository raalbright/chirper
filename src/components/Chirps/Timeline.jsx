import React, { Fragment } from "react";
import Chirp from "./Chirp"

const Timeline = ( { chirps } ) => (
  <Fragment>
    <h1>Timeline</h1>
    <div className="d-flex justify-content-center">
      <div className="list-group list-group-flush w-50">
        { chirps.map( chirp => (
          <Chirp chirp={ chirp } />
        ) ) }
      </div>
    </div>
  </Fragment>
);

export default Timeline;
