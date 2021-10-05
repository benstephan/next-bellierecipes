import React from "react";
import styles from "./HeaderNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { ProfileDropdown } from "./ProfileDropdown/ProfileDropdown";
export const HeaderNav = () => {
  return (
    <div className={styles.headerNav}>
      <nav>
        <button className={styles.headerNav__filter}>
          <FontAwesomeIcon icon={faSlidersH} />
        </button>
        <div className={styles.headerNav__profile}>
          <ProfileDropdown />
        </div>
      </nav>
    </div>
  );
};
