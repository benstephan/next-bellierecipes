import React from "react";
import Link from "next/link";
import styles from "./Recipe.module.scss";
import { RecipeContent } from "./RecipeContent/RecipeContent";
import { RecipeActions } from "./RecipeActions/RecipeActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
export const Recipe = () => {
  return (
    <div className={`${styles.recipe} container`}>
      <div className="row">
        <div className={`${styles.recipe__back} col-1`}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </a>
          </Link>
        </div>
        <div className={`${styles.recipe_content} col-10`}>
          <RecipeContent />
        </div>
        <div className={`${styles.recipe_actions} col-1`}>
          <RecipeActions />
        </div>
      </div>
    </div>
  );
};
