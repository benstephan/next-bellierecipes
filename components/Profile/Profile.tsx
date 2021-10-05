import React from "react";
import styles from "./Profile.module.scss";
import { ProfileNav } from "./ProfileNav/ProfileNav";
import { ProfileRecipe } from "./ProfileRecipe/ProfileRecipe";
export const Profile = () => {
  return (
    <div className={`${styles.profile} container`}>
      <div className="row">
        <div className={`${styles.profile__container} col-6 offset-3`}>
          <ProfileNav />
          <div className={styles.profile__container__recipes}>
            <ProfileRecipe />
            <ProfileRecipe />
            <ProfileRecipe />
            <ProfileRecipe />
            <ProfileRecipe />
            <ProfileRecipe />
          </div>
        </div>
      </div>
    </div>
  );
};
