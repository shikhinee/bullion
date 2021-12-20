//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Description.module.scss";

const Description = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (isClicked && activeAnchor !== "#features") {
      animation.start("hidden");
      return;
    }

    if (isClicked) {
      animation.start("visible");
    } else if (inView) {
      setActiveAnchor("#features");
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variants = {
    visible: { scale: 1, transition: { duration: 0.5 } },
    hidden: {
      scale: 0.8,
    },
  };

  return (
    <div className={styles.container} id="features" ref={ref}>
      <div className={styles.content}>
        <h2>
        BULLION is a blockchain based lending platform that enables precious metal owners, including Gold, Silver, or Copper, to receive loans at competitive rates of interest, based on the precious metals that are pledged as collateral.
        </h2>
      </div>
    </div>
  );
};

export default Description;
