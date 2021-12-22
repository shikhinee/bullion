import Head from "next/head";
import { motion } from "framer-motion";

import LandingLayout from "@/layouts/Landing";
import Home from "@/views/Landing/Home";
import About from "@/views/Landing/About";
import Description from "@/views/Landing/Description";
import Why from "@/views/Landing/Why";
import Features from "@/views/Landing/Features";
import Hyfi from "@/views/Landing/Hyfi";
import Team from "@/views/Landing/Team";
// import Contact from "@/views/Landing/Contact";
// import ComingSoon from "@/views/Landing/ComingSoon";
import styles from "./Root.module.scss";

const RootPage = (props) => {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Head>
        <title>Bullion</title>
        <meta property="og:url" content="https://bullion.codes" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bullion" />
        <meta
          property="og:description"
          content="Decentralized Gold-Backed Liquidity Market Protocol"
        />
        <meta property="og:image" content="/bulliondark.png" />
      </Head>
      {/* <ComingSoon /> */}
      <Home />
      <About />
      <Description />
      <Why />
      <Features />
      <Hyfi />
      <Team />
      {/* <Contact /> */}
    </motion.main>
  );
};

RootPage.Layout = LandingLayout;

export default RootPage;
