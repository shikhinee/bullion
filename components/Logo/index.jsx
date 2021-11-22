//Next, React (core node_modules) imports must be placed here

//Styles must be imported here
import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styles.container}>
      <span>SOLID</span>
      <span>FRAMEWORKS</span>
    </div>
  );
};

export default Logo;
