//Next, React (core node_modules) imports must be placed here
import Link from "next/link"
//import STORE from '@/store'
import { useState } from 'react';
import styles from "./Menu.module.scss";
import ThemeToggler from '@/components/ThemeToggler';

const Menu = (props) => {
  const [themeChanged, setThemeChanged] = useState(false);
  const handleTheme = () => {
    setThemeChanged(!themeChanged)
  }
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <h2>БИДНИЙ ТУХАЙ</h2>
      <ThemeToggler handler={handleTheme} isChanged={themeChanged}/>
      </div>
    </div>
  );
};

export default Menu;
