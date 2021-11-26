//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from "./About.module.scss";

const About = (props) => {
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView && !isClicked) {
      setActiveAnchor("#about");
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };

  return (
    <motion.div className={styles.container} id="about">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className={styles.content}
      >
        <div className={styles.left}>
          <h1>
            <span>This is</span>
            <span>About Page</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque nostrum non vitae repellat ipsum voluptas explicabo
            laborum modi mollitia molestias tempore debitis veritatis,
            perspiciatis, blanditiis cupiditate saepe quasi quod?
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.background}>
            <Image
              className={styles.image}
              width="700"
              height="800"
              src="/mine.jpeg"
            ></Image>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
