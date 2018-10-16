import React from "react";

const ChirpForm = ( { onSubmit } ) => (
  <form onSubmit={ onSubmit }>
    <div className="form-group">
      <label htmlFor="userName"></label>
      <input type="text" name="userName" className="form-control form-control-sm" />
    </div>
    <div className="form-group">
      <label htmlFor="body"></label>
      <textarea name="body" className="form-control form-control-sm" cols="30" rows="5"></textarea>
    </div>
    <input type="submit" className="form-control form-control-sm btn btn-primary" value="Submit" />
  </form>
);

export default ChirpForm;
