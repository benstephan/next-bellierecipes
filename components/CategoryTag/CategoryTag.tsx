import React from "react";
import styles from "./CategoryTag.module.scss";
export const CategoryTag = () => {
  return (
    <div className={styles.categoryTag}>
      <a className={styles.categoryTag__wrap}>
        <div className={styles.categoryTag__wrap__image}>
          <img
            src="https://app.bellierecipes.com/categories/american.jpg"
            alt="text"
          />
        </div>
        <div className={styles.categoryTag__wrap__title}>American</div>
      </a>
    </div>
  );
};
