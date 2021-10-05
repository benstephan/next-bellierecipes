import React from "react";
import styles from "./CreateRecipeButton.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const CreateRecipeButton = () => {
  return (
    <Link href="/create-recipe">
      <a className={styles.createRecipeButton}>
        <FontAwesomeIcon icon={faPlus} />
      </a>
    </Link>
  );
};
