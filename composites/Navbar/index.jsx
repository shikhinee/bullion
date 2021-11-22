//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useState } from "react";

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import styles from "./Navbar.module.scss";

import MenuIcon from "@/components/MenuIcon";

const Navbar = (props) => {
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
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
        <Menu />

        <Link href="#home">
          <a>
            <MenuIcon />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
