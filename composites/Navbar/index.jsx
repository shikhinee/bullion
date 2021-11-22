//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useState } from "react";

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";

import MenuIcon from "@/components/MenuIcon";

const Navbar = (props) => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
        <Menu />
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Navbar;
