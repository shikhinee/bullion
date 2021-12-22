//Next, React (core node_modules) imports must be placed here

import { useState, useEffect } from "react";

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";

import MenuIcon from "@/components/MenuIcon";

const Navbar = ({ menuIsOpen, menuHandler, ...props }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <header
      className={
        navbar ? `${styles.container} ${styles.active}` : `${styles.container}`
      }
    >
      <nav className={styles.nav}>
        <Logo />

        <Menu onClick={props.onClick} isOpen={menuIsOpen} />

        <MenuIcon
          handler={() => {
            menuHandler(!menuIsOpen);
          }}
          isOpen={menuIsOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;
