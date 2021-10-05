import React, { useState, useRef, useEffect } from "react";
import styles from "./ProfileDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
export const ProfileDropdown = () => {
  const [menu, toggleMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dropdownCurrent: any = dropdownRef.current;

    if (dropdownCurrent && menu) {
      window.addEventListener(
        "click",
        (evt: any) => {
          if (
            dropdownCurrent &&
            !dropdownCurrent.contains(evt.target) &&
            menu
          ) {
            toggleMenu(false);
          }
        },
        false
      );
    }
    return () => {
      window.removeEventListener("click", () => {}, false);
    };
  }, [menu]);

  return (
    <div className={styles.profileDropdown} ref={dropdownRef}>
      <button
        className={styles.profileDropdown__button}
        onClick={() => toggleMenu(!menu)}
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </button>
      <div
        className={`${styles.profileDropdown__dropdown} ${
          menu ? styles.show : ""
        }`}
      >
        <div className={styles.profileDropdown__dropdown__user}>
          <div className={styles.profileDropdown__dropdown__user__pic}></div>
          <div className={styles.profileDropdown__dropdown__user__info}>
            <span>Ben Stephan</span>
            <small>elapatuse@gmail.com</small>
          </div>
        </div>
        <div className={styles.profileDropdown__dropdown__menu}>
          <nav>
            <a>Profile</a>
            <a>My Recipes</a>
            <a>Favorites</a>
            <a>Setings</a>
            <a>Help</a>
          </nav>
        </div>
        <div className={styles.profileDropdown__dropdown__logout}>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};
