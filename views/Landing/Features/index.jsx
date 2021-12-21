//Next, React (core node_modules) imports must be placed here
import { useEffect, useContext } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ActiveAnchorContext from "@/store/ActiveAnchor";
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Features.module.scss";

const variants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const textAnimationFadeIn = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Features = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (isClicked && activeAnchor !== "#features") {
      animation.start("hidden");
      return;
    }

    if (isClicked) {
      animation.start("visible");
    } else if (inView) {
      animation.start("visible");
      setActiveAnchor("#features");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      animation2.start("visible");
    } else {
      animation2.start("hidden");
    }
  }, [inView2]);

  return (
    <div className={styles.container} id="features">
      <motion.div
        className={styles.features}
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
      >
        <motion.h3 variants={textAnimationFadeIn}>BULLION Features</motion.h3>
        <div className={styles.clearFix}>
          <motion.div
            animate={{ opacity: [1, 0], rotateY: [0, 90] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={styles.image}
          >
            <Image
              src="/blogo.png"
              width={150}
              height={150}
              layout="responsive"
            ></Image>
          </motion.div>
        </div>

        <div className={styles.feature}>
          <div className={styles.content}>
            <motion.h2 variants={textAnimationFadeIn}>
              Interest Payment & Loan Obligations
            </motion.h2>
            <motion.p variants={textAnimationFadeIn}>
              TROY, is the platform native utility token on BULLION, featuring a
              wide array of DeFi features (staking, payments, loans,
              collateralization, etc.) used to reward Creditors of the protocol
              for interest incurred as a result of the loan agreement.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.features}
        ref={ref2}
        variants={variants}
        initial="hidden"
        animate={animation2}
      >
        <motion.div
          // animate={{
          //   rotate: [0, 360],
          // }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className={styles.image}
        >
          <Image
            src="/ilogo.png"
            width={100}
            height={100}
            layout="responsive"
          ></Image>
        </motion.div>
        <div className={styles.feature}>
          <div className={styles.content}>
            <motion.h2 variants={textAnimationFadeIn}>
              Lender & Borrower Matching
            </motion.h2>
            <motion.p variants={textAnimationFadeIn}>
              C-TROY is minted to represent a loan agreement between the Debtor
              and Creditor, and the certificate of deposits received from a
              recognized bank or vault verifies the existence of the gold.{" "}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
