import React from "react";
import styles from "./Recipes.module.scss";
import { RecipeCard } from "./RecipeCard/RecipeCard";
export const Recipes = () => {
  return (
    <div className={styles.recipes}>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
};
