import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder} // For reuseable reason. Passed it from props.
    onChange={handleChange}
  />
);

// Just get props and Return HTML.
// If don't need internal State or Life cycle methods,
// Go with Functional Component.
