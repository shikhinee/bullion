//Next, React (core node_modules) imports must be placed here
import Link from "next/link";

import { useContext, useState } from "react";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPONENT from '@/components'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";

import MenuIcon from "@/components/MenuIcon";

const Navbar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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

        <MenuIcon handler={() => {
          setMenuIsOpen(!menuIsOpen)
        }} isOpen={menuIsOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
