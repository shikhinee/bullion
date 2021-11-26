//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from "./About.module.scss";

const About = (props) => {
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !isClicked) {
      setActiveAnchor("#about");
    }
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotate: 15,
    },
  };
  const variants1 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
  };
  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };
  return (
    <div className={styles.container} id="about">
      <div className={styles.content} ref={ref}>
        <motion.div className={styles.left}>
          <motion.h1 transition={{ delayChildren: 1 }}>
            <motion.span
              animate={inView ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              This is{" "}
            </motion.span>
            <motion.span
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              About Page
            </motion.span>
          </motion.h1>
          <motion.p
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delayChildren: 2, duration: 2, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque nostrum non vitae repellat ipsum voluptas explicabo
            laborum modi mollitia molestias tempore debitis veritatis,
            perspiciatis, blanditiis cupiditate saepe quasi quod?
          </motion.p>
        </motion.div>
        <motion.div className={styles.right}>
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants1}
            transition={{ duration: 1, ease: "easeOut" }}
            className={styles.background}
          >
            <Image
              className={styles.image}
              width="700"
              height="800"
              src="/mine.jpeg"
            ></Image>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
