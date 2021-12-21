//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Description.module.scss";

const textAnimationFadeIn = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

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

  return (
    <div className={styles.container} id="features" ref={ref}>
      <div className={styles.content}>
        <motion.h2
          initial="hidden"
          variants={textAnimationFadeIn}
          animate={animation}
        >
          BULLION is a blockchain based lending platform that enables precious
          metal owners, including Gold, Silver, or Copper, to receive loans at
          competitive rates of interest, based on the precious metals that are
          pledged as collateral.
        </motion.h2>
      </div>
    </div>
  );
};

export default Description;
