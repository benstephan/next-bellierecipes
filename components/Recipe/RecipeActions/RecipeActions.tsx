import React from "react";
import styles from "./RecipeActions.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPrint, faHeart } from "@fortawesome/free-solid-svg-icons";

export const RecipeActions = () => {
  return (
    <div className={styles.recipeActions}>
      <button>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button>
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button>
        <FontAwesomeIcon icon={faPrint} />
      </button>
    </div>
  );
};
