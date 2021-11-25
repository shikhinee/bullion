import { motion } from "framer-motion";

import LandingLayout from "@/layouts/Landing";
import Home from "@/views/Landing/Home";
import About from "@/views/Landing/About";
import Features from "@/views/Landing/Features";
import Team from "@/views/Landing/Team";
import Contact from "@/views/Landing/Contact";

import styles from "./Root.module.scss";

import Canvas from "@/views/Landing/CanvasLanding/index.jsx";

const RootPage = (props) => {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Canvas />
      <Home />
      <About />
      <Features />
      <Team />
      <Contact />
    </motion.main>
  );
};

RootPage.Layout = LandingLayout;

export default RootPage;
