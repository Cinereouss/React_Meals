import React from 'react'
import "./SearchFood.css"

const SearchFood = ({ handldOnKeyUp }) => {
  return (
    <div className="SearchMeals">
      <input
        type="text"
        className="SearchInput"
        placeholder="Enter an ingredient"
        id="search-input"
        onKeyUp={handldOnKeyUp}
      />
    </div>
  );
};

export default SearchFood
