//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
//import STORE from '@/store'

//import COMPONENT from '@/components'
import Menu from '@/components/Menu'
import MenuIcon from '@/components/MenuIcon'
import Logo from '@/components/Logo'
import styles from './Navbar.module.scss'
import { useState } from 'react';

const Navbar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
		  <Logo/>
        <MenuIcon handler={handleMenu} isOpen={menuIsOpen} />     
        {menuIsOpen && <Menu />}
      </nav>
    </header>
  );
};

export default Navbar;
