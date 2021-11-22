//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
        <Link href="/#home">
          <a>
            <Logo />
          </a>
        </Link>

        <Menu />

        <MenuIcon />
      </nav>
    </header>
  );
};

export default Navbar;
