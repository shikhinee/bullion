//Next, React (core node_modules) imports must be placed here
import Link from "next/link";

import { useContext } from "react";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPONENT from '@/components'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";

import MenuIcon from "@/components/MenuIcon";

const Navbar = (props) => {
  const { setActiveAnchor } = useContext(ActiveAnchorContext);
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/#home">
          <a
            onClick={(e) => {
              setActiveAnchor(e.target.hash);
            }}
          >
            <Logo />
          </a>
        </Link>

        <Menu onClick={props.onClick} />

        <MenuIcon />
      </nav>
    </header>
  );
};

export default Navbar;
