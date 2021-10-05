import React from "react";
import styles from "./RecipeCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { CategoryTag } from "../../CategoryTag/CategoryTag";
export const RecipeCard = () => {
  return (
    <div
      className={styles.recipeCard}
      style={{
        backgroundImage:
          "url('https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-bites-and-asparagus-recipe.jpg'",
      }}
    >
      <a className={styles.recipeCard__wrap}>
        <div className={styles.recipeCard__wrap__category}>
          <CategoryTag />
        </div>
        <div className={styles.recipeCard__wrap__details}>
          <span className={styles.recipeCard__wrap__details__title}>
            Crock Pot Roast
          </span>
          <span className={styles.recipeCard__wrap__details__meta}>
            <FontAwesomeIcon icon={faHeart} /> 56{" "}
            <FontAwesomeIcon icon={faStar} /> 5
          </span>
        </div>
      </a>
    </div>
  );
};
