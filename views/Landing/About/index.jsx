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
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (isClicked && activeAnchor !== "#about") {
      animation.start("hidden");
      return;
    }

    if (isClicked) {
      animation.start("visible");
    } else if (inView) {
      animation.start("visible");
      setActiveAnchor("#about");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.container} id="about" ref={ref}>
      <div className={styles.content}>
        <Image layout="fill" src="/mineimage.png" objectFit="cover"></Image>
      </div>
    </div>
  );
};

export default About;
