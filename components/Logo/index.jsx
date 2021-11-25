//Next, React (core node_modules) imports must be placed here
import Image from "next/image";

//Styles must be imported here
import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styles.container}>
      <Image
        width={"100%"}
        height={"100%"}
        src="/bulliondark.png"
        alt="Bullion Logo"
      />
    </div>
  );
};

export default Logo;
