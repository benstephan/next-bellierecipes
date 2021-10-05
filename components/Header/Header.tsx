import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Search } from "./HeaderNav/Search/Search";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={styles.header__search}>
        <Search />
      </div>
      <div className={styles.header__nav}>
        <HeaderNav />
      </div>
    </div>
  );
};
