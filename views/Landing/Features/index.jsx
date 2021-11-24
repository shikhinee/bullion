//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Features.module.scss";

const Features = (props) => {
  const { setActiveAnchor } = useContext(ActiveAnchorContext);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveAnchor("#features");
    }
  });

  const variants = {
    visible: { scale: 1 },
    hidden: {
      scale: 0.8,
    },
  };

  return (
    <div className={styles.container} id="features">
      <div className={styles.content}>
        <div className={styles.panel}>
          <h1>This is Features Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque nostrum non vitae repellat ipsum voluptas explicabo
            laborum modi mollitia molestias tempore debitis veritatis,
            perspiciatis, blanditiis cupiditate saepe quasi quod?
          </p>
        </div>
        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
