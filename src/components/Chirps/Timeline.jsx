import React, { Fragment } from "react";
import Chirp from "./Chirp"

const Timeline = ( { chirps } ) => (
  <Fragment>
    <div className="d-flex justify-content-center">
      <div className="list-group list-group-flush w-50">
        { chirps.map( chirp => (
          <Chirp chirp={ chirp } key={ chirp.id } />
        ) ) }
      </div>
    </div>
  </Fragment>
);

export default Timeline;
