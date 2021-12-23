//Next, React (core node_modules) imports must be placed here
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "@/components/Carousel"

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from "./About.module.scss";

const About = (props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        <Carousel/>
      </div>
    </div>
  );
};

export default About;
