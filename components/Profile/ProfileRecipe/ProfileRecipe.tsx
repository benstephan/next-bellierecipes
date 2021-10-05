import React from "react";
import styles from "./ProfileRecipe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
export const ProfileRecipe = () => {
  return (
    <div className={styles.profileRecipe}>
      <div
        className={styles.profileRecipe__image}
        style={{
          backgroundImage:
            "url('https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-bites-and-asparagus-recipe.jpg'",
        }}
      ></div>
      <div className={styles.profileRecipe__title}>
        <strong>Crock Pot Roast</strong>
        September 18th, 2021
      </div>
      <div className={styles.profileRecipe__actions}>
        <button>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};
