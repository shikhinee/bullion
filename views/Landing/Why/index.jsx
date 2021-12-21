//Next, React (core node_modules) imports must be placed here
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Why.module.scss";

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

const Why = (props) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    const scrollSnapPolyfill = dynamic(() =>
      import("css-scroll-snap-polyfill")
    );

    console.log(scrollSnapPolyfill);
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
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

  useEffect(() => {
    if (inView3) {
      animation3.start("visible");
    } else {
      animation3.start("hidden");
    }
  }, [inView3]);

  return (
    <div className={styles.container}>
      <div className={styles.giphy}>
        <Image
          src="/bullion.gif"
          priority
          className={styles.gif}
          layout="fill"
        ></Image>
      </div>
      <div className={styles.horizontal}>
        <motion.div
          className={styles.loanAccess}
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
        >
          <motion.div className={styles.heading} variants={textAnimationFadeIn}>
            <h3>Why BULLION</h3>
            <span>|</span>
            <div className={styles.blogo}>
              <Image
                src="/blogo.png"
                width={40}
                height={40}
                layout="responsive"
              ></Image>
            </div>
          </motion.div>
          <motion.h2 variants={textAnimationFadeIn}>Loan Access</motion.h2>
          <motion.p variants={textAnimationFadeIn}>
            The BULLION liquidity market protocol provides the means for
            underserved “savers” and “borrowers”, especially small-to-midsize
            businesses in traditional finance, to receive equitable access to
            competitively priced financial services.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.volatility}
          ref={ref2}
          variants={variants}
          initial="hidden"
          animate={animation2}
        >
          <motion.h2 variants={textAnimationFadeIn}>
            Volatility & Lending <br /> System Stability
          </motion.h2>
          <motion.p variants={textAnimationFadeIn}>
            In order to reconcile the attraction for liquidity providing
            speculators with stability desired by lenders and borrowers, TROY
            token will be subject to an equilibrium seeking supply control
            mechanism.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.hyfi}
          ref={ref3}
          variants={variants}
          initial="hidden"
          animate={animation3}
        >
          <motion.h2 variants={textAnimationFadeIn}>
            Hybrid Finance (HyFi)
          </motion.h2>
          <motion.p variants={textAnimationFadeIn}>
            Hybrid Finance or “HyFi '' draws strengths of the Bretton Woods
            System and facilitates asset tokenization to bring real world value
            to the blockchain. Benefits of tokenization include open access,
            on-chain transparency, and reduced transactional friction
            experienced by legacy systems.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
