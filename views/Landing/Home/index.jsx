//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import CanvasLanding from "@/components/CanvasLanding";
import styles from "./Home.module.scss";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      duration: 1.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 1,
  },
};

const textAnimationFadeIn = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 1.2,
    },
  },
};

const Home = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (isClicked && activeAnchor !== "#home") {
      animation.start("hidden");
      return;
    }

    if (isClicked) {
      animation.start("visible");
    } else if (inView) {
      animation.start("visible");
      setActiveAnchor("#home");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.container} id="home" ref={ref}>
      <CanvasLanding />
      <motion.div
        initial="hidden"
        animate={animation}
        variants={variants}
        ref={ref}
        className={styles.content}
      >
        <motion.h1>
          Decentralized{" "}
          <motion.span
            initial="hidden"
            variants={textAnimationFadeIn}
            animate="visible"
            className={styles.highlight}
          >
            Gold-backed
          </motion.span>{" "}
          <br /> Liquidity Market Protocol
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Home;
