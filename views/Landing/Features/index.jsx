//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Features.module.scss";

const Features = (props) => {
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView && !isClicked) {
      setActiveAnchor("#features");
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  });

  const variants = {
    visible: { scale: 1, transition: { duration: 0.5 } },
    hidden: {
      scale: 0.8,
    },
  };

  return (
    <div className={styles.container} id="features" ref={ref}>
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
        <motion.div
          className={styles.cards}
          initial="hidden"
          animate={animation}
          variants={variants}
        >
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Feature Headline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
              fuga numquam, cupiditate.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
