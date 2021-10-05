import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
