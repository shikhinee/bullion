//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import Link from "next/link";
//import STORE from '@/store'
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

const Menu = (props) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.replace(e.target.href);
  };

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (window.location.hash) {
        window.history.replaceState({}, document.title, "/");
      }
    };

    const handleHashChangeComplete = () => {
      window.history.replaceState({}, document.title, "/");
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("hashChangeComplete", handleHashChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("hashChangeComplete", handleHashChangeComplete);
    };
  }, [router.events]);

  return (
    <ul className={styles.container}>
      <li>
        <Link href="/lmao">
          <a onClick={handleClick}>Lmao</a>
        </Link>
      </li>
      <li>
        <Link href="/#section1">
          <a onClick={handleClick}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#section2">
          <a onClick={handleClick}>Features</a>
        </Link>
      </li>
      <li>
        <Link href="/#section3">
          <a onClick={handleClick}>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/#section4">
          <a onClick={handleClick}>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/#section5">
          <a onClick={handleClick}>Whitepaper</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
