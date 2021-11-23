//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import {
  elementScrollIntoView,
  windowScrollBy,
} from "seamless-scroll-polyfill";

import Link from "next/link";
import { motion } from "framer-motion";

import ActiveAnchorContext from "@/store/ActiveAnchor";

//Styles must be imported here
import styles from "./SideNavigation.module.scss";

const SideNavigation = ({ isCollapsed, show, routes, ...props }) => {
  const router = useRouter();
  const { whitePaperActiveAnchor, setWhitePaperActiveAnchor } =
    useContext(ActiveAnchorContext);

  useEffect(() => {
    function scrollToTargetAdjusted(element, offSet) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offSet;

      windowScrollBy(window, {
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (router.pathname == "/whitepaper") {
      if (whitePaperActiveAnchor) {
        scrollToTargetAdjusted(
          document.querySelector(whitePaperActiveAnchor),
          156
        );
      }
    }
  }, [whitePaperActiveAnchor]);

  const handleClick = (e) => {
    e.preventDefault();
    setWhitePaperActiveAnchor(e.target.hash);
  };

  const sideMenu = Object.entries(routes).map(([key, value]) => {
    if (value.subRoutes) {
      return (
        <ul className={styles.list} key={key}>
          <li>
            <Link href={value.route}>
              <a
                className={
                  `#${value.route.split("#")[1]}` === whitePaperActiveAnchor
                    ? styles.active
                    : ""
                }
                onClick={handleClick}
              >
                {value.title}
              </a>
            </Link>
          </li>
          {value.subRoutes.map((subRoute) => {
            return (
              <li key={subRoute.route}>
                <Link href={subRoute.route}>
                  <a
                    className={
                      `#${subRoute.route.split("#")[1]}` ===
                      whitePaperActiveAnchor
                        ? styles.active
                        : ""
                    }
                    onClick={handleClick}
                  >
                    {subRoute.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <li key={key}>
          <Link href={value.route}>
            <a
              className={
                `#${value.route.split("#")[1]}` === whitePaperActiveAnchor
                  ? styles.active
                  : ""
              }
              onClick={handleClick}
            >
              {value.title}
            </a>
          </Link>
        </li>
      );
    }
  });

  return (
    <motion.aside
      className={styles.container}
      style={{ display: show ? "block" : "none" }}
    >
      <ul className={styles.list}>{sideMenu}</ul>
    </motion.aside>
  );
};

export default SideNavigation;
