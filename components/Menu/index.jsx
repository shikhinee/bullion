import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";

import ActiveAnchorContext from "@/store/ActiveAnchor";

import styles from "./Menu.module.scss";

const Menu = (props) => {
  const { route } = useRouter();
  const { activeAnchor } = useContext(ActiveAnchorContext);

  return (
    <ul className={styles.container}>
      <li>
        <Link href="/#home">
          <a
            className={
              activeAnchor == "#home" && route == "/" ? styles.isActive : ""
            }
            onClick={props.onClick}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <a
            className={
              activeAnchor == "#about" && route == "/" ? styles.isActive : ""
            }
            onClick={props.onClick}
          >
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#features">
          <a
            className={
              activeAnchor == "#features" && route == "/" ? styles.isActive : ""
            }
            onClick={props.onClick}
          >
            Features
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a
            className={
              activeAnchor == "#team" && route == "/" ? styles.isActive : ""
            }
            onClick={props.onClick}
          >
            Team
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <a
            className={
              activeAnchor == "#contact" && route == "/" ? styles.isActive : ""
            }
            onClick={props.onClick}
          >
            Contact
          </a>
        </Link>
      </li>
      <li>
        <Link href="/whitepaper">
          <a
            className={
              route == "/whitepaper"
                ? `${styles.isActive} ${styles.ctaItem}`
                : styles.ctaItem
            }
            onClick={props.onClick}
          >
            Whitepaper
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
