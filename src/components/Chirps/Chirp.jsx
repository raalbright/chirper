import React from "react";

const Chirp = ( { chirp } ) => (
  <div className="list-group-item" key={ chirp.id }>
    <div className="media">
      <div className="media-body">
        <h5 className="mt-0 small text-muted">
          <span>{ chirp.user.name + ' ' }</span>
          <span>{ chirp.createdAt.toDateString() }</span>
        </h5>
        <p>{ chirp.body }</p>
      </div>
    </div>
  </div>
);

export default Chirp;
