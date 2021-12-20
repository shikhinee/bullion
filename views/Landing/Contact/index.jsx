//Next, React (core node_modules) imports must be placed here
import { useState, useEffect, useRef, useContext } from "react";

import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Contact.module.scss";

const Contact = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (isClicked && activeAnchor !== "#contact") {
      animation.start("hidden");
      return;
    }

    if (isClicked) {
      // console.log("CONTACT: I was clicked and now running Animation");
      animation.start("visible");
    } else if (inView) {
      // console.log("CONTACT: I was inView now running Animation");
      animation.start("visible");
      setActiveAnchor("#contact");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };
  return (
    <div className={styles.container} id="contact" ref={ref}>
      <motion.div
        className={styles.content}
        animate={animation}
        variants={variants}
      >
        <h1>Contact us!</h1>
      </motion.div>
    </div>
  );
};

export default Contact;
