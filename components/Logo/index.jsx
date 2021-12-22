//Next, React (core node_modules) imports must be placed here
import Link from "next/link";

import Image from "next/image";

//Styles must be imported here
import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <Link href="/">
      <a className={styles.container}>
        <Image src="/bulliondark.png" alt="Bullion Logo" layout="fill" />
      </a>
    </Link>
  );
};

export default Logo;
