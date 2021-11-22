//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import Link from "next/link";
//import STORE from '@/store'
import { elementScrollIntoView } from "seamless-scroll-polyfill";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

const Menu = (props) => {
  const [menuItems, setMenuItems] = useState({
    home: {
      isActive: false,
    },
    about: {
      isActive: false,
    },
    features: {
      isActive: false,
    },
    team: {
      isActive: false,
    },
    contact: {
      isActive: false,
    },
  });

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

    const targetElements = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("features"),
      document.getElementById("team"),
      document.getElementById("contact"),
    ];

    const options = {
      threshold: 0.8,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenuItems({
            ...menuItems,
            [entry.target.id]: {
              isActive: true,
            },
          });
        } else {
          // setMenuItems({
          //   ...menuItems,
          //   [entry.target.id]: {
          //     isActive: false,
          //   },
          // });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    targetElements.forEach((element) => {
      observer.observe(element);
    });

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
          <a
            className={
              menuItems.about.isActive
                ? `${styles.isActive} ${styles.navLink}`
                : styles.navLink
            }
          >
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#features">
          <a
            className={
              menuItems.features.isActive
                ? `${styles.isActive} ${styles.navLink}`
                : styles.navLink
            }
          >
            Features
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a
            className={
              menuItems.team.isActive
                ? `${styles.isActive} ${styles.navLink}`
                : styles.navLink
            }
          >
            Team
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <a
            className={
              menuItems.contact.isActive
                ? `${styles.isActive} ${styles.navLink}`
                : styles.navLink
            }
          >
            Contact
          </a>
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
