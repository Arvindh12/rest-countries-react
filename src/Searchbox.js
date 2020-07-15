import React, { useState } from "react";

function Searchbox({ dispatchCountries }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(
        "https://restcountries.eu/rest/v2/name/" + searchString
      );
      let data = await res.json();

      console.log(data)

      dispatchCountries({ type: "UPDATE", payload: data });
    } catch (err) {
    //  console.log(err.message);
    }
  };

  const [searchString, setSearchString] = useState("");

  const changeHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="container">
      <div className="jumbotron p-3 mb-1 shadow-sm">
        <div className="d-flex align-items-center">
          <form
            onSubmit={handleSubmit}
            style={{ display: "inline-flex", width: "100%" }}
          >
            <input
              id="input-field"
              value={searchString}
              onChange={changeHandler}
              name="search"
              autoFocus
              placeholder="Enter a country name"
              autoComplete="off"
              className="form-control mr-3"
              type="text"
              required
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
