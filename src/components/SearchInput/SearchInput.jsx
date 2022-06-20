import styles from "./SearchInput.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import React from "react";

const SearchInput = ({ label, setQuery, loading, onClick, containerStyle }) => {
  const handleChange = (event) => {
    const search = event.target.value;
    if (search.length > 1) setQuery((prev) => ({ ...prev, search }));
    if (search === "") setQuery((prev) => ({ ...prev, search: "" }));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.inputContainer}
        placeholder="Search"
        onChange={handleChange}
      />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};
export default SearchInput;
