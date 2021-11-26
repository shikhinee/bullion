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
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView && !isClicked) {
      setActiveAnchor("#contact");
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  });

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
        <h1>This is Contact Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum
          modi mollitia molestias tempore debitis veritatis, perspiciatis,
          blanditiis cupiditate saepe quasi quod?
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
