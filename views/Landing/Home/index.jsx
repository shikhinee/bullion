//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from "./Home.module.scss";

const Home = (props) => {
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView && !isClicked) {
      setActiveAnchor("#home");
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0,
      scale: 1,
    },
  };
  return (
    <div className={styles.container} id="home" ref={ref}>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={variants}
        ref={ref}
        className={styles.content}
      >
        <h1>This is Home Page</h1>
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

export default Home;
