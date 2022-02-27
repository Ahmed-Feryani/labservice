import "./searchBar.css";
import React from "react";

const SearchBar = ({ setprofession, setcity }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    setprofession(e.target.profession.value);
    setcity(e.target.city.value);
  };
  return (
    <div class="s01">
      <form onSubmit={searchHandler}>
        <fieldset>
          <legend>Find a handyman near to you</legend>
        </fieldset>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <select
              aria-label="Default select example"
              name="profession"
              //onChange={(e) => setService(e.target.value)}
            >
              <option value="" selected disabled>
                What are you looking for?
              </option>
              <option value="">All</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="mechanical">Mechanical</option>
              <option value="developer">Developer</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <div class="input-field second-wrap">
            <select name="city">
              <option value="" selected disabled>
                Your city
              </option>
              <option value="">All</option>
              <option value="gafsa">Gafsa</option>
              <option value="sfax">Sfax</option>
              <option value="sousse">Sousse</option>
            </select>
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
