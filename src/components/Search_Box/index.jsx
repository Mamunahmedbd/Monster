import React from "react";
import styles from "./styles.module.css";

const SearchFilter = ({ placeholder, searchField, searchFilter }) => {
  return (
    <input
      type="search"
      className={styles.search}
      placeholder={placeholder}
      value={searchField}
      onChange={(e) => searchFilter(e.target.value)}
    />
  );
};
export default SearchFilter;
