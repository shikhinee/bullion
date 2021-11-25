//Next, React (core node_modules) imports must be placed here
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import smoothscroll from "smoothscroll-polyfill";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'
import Navbar from "@/composites/Navbar";
import Footer from "@/composites/Footer";
//import COMPONENT from '@/components'

import styles from "./Landing.module.scss";

const LandingLayout = ({ children, ...props }) => {
  const router = useRouter();
  const { activeAnchor, setActiveAnchorImportant } =
    useContext(ActiveAnchorContext);

  useEffect(() => {
    if (router.pathname == "/") {
      if (activeAnchor) {
        smoothscroll.polyfill();

        document.querySelector(activeAnchor).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [activeAnchor, router]);

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.hash) {
      if (window.location.pathname !== "/") {
        setActiveAnchorImportant(e.target.hash);
        router.push("/");
      } else {
        setActiveAnchorImportant(e.target.hash);
      }
    } else {
      router.push(e.target.href);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar onClick={handleClick} />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      <Footer />
    </div>
  );
};

export default LandingLayout;
