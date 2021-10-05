import React from "react";
import styles from "./ProfileNav.module.scss";
import Link from "next/link";
export const ProfileNav = () => {
  return (
    <nav className={styles.profileNav}>
      <Link href="/">
        <a>Profile</a>
      </Link>
      <Link href="/">
        <a>My Recipes</a>
      </Link>
      <Link href="/">
        <a>Saved Recipes</a>
      </Link>
      <Link href="/">
        <a>Settings</a>
      </Link>
    </nav>
  );
};
