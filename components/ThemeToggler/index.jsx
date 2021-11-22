// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "@/store/ThemeContext";
import styles from "./ThemeToggler.module.scss";

const ThemeToggler = (props) => {
  const { toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className={styles.themeChanger} onClick={() => {props.handler(); toggleDarkTheme()}}>
      <h2>Theme</h2>
      <div className={
            props.isChanged
              ? `${styles.wrapper} ${styles.animationWrapper}`
              : `${styles.wrapper}`
          }
        >
        <div className={
            props.isChanged
              ? `${styles.knob} ${styles.animationKnob}`
              : `${styles.knob}`
          }
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggler;
