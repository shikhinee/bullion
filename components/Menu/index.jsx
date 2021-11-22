//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import Link from "next/link";
//import STORE from '@/store'
import { elementScrollIntoView } from "seamless-scroll-polyfill";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

const Menu = (props) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (window.location.hash) {
        window.history.replaceState({}, document.title, "/");
      }
    };

    const handleHashChangeStart = (url) => {
      const hash = url.split("#")[1];
      elementScrollIntoView(document.querySelector(`#${hash}`), {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    };

    const handleHashChangeComplete = () => {
      window.history.replaceState({}, document.title, "/");
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("hashChangeStart", handleHashChangeStart);
    router.events.on("hashChangeComplete", handleHashChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("hashChangeStart", handleHashChangeStart);
      router.events.off("hashChangeComplete", handleHashChangeComplete);
    };
  }, [router.events]);

  return (
    <ul className={styles.container}>
      <li>
        <Link href="/test">
          <a>Test</a>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#features">
          <a>Features</a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/whitepaper">
          <a>Whitepaper</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
