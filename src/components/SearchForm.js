import React from "react";

function SearchForm(props) {
  return (
    <form className="m-3">
      <div className="input-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a GIF"
          id="search"
        />
        <div className="input-group-append">
        <button onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
