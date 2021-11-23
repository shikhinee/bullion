//Next, React (core node_modules) imports must be placed here
import { motion } from "framer-motion";

//import STORE from '@/store'

//import LAYOUT from '@/layouts'
// import DashboardLayout from "@/layouts/Dashboard";
//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import Panel from "@/composites/Panel";

import styles from "./whitepaper.module.scss";
import LandingLayout from "@/layouts/Landing";

const WhitepaperPage = (props) => {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Panel>
        <div className={styles.content}>
          <section id="bullion">
            <h1>bullion</h1>
          </section>
          <section id="introduction">
            <h1>Introduction</h1>
          </section>
          <section id="problem">
            <h1>Problem: Financial Exclusion</h1>
          </section>
          <section id="solution">
            <h1>Solution</h1>
            <h2 id="solution-debtors">Debtors</h2>
            <h2 id="solution-creditors">Creditors</h2>
            <h2 id="solution-interest">Interest</h2>
          </section>
          <section id="token">
            <h1>Bullion Token Economy</h1>
            <h2 id="token-ecosystem">Token Ecosystem</h2>
            <h2 id="token-allocation">Token Allocation</h2>
          </section>
          <section id="partnerships">
            <h1>Partnerships</h1>
          </section>
          <section id="roadmap">
            <h1>Roadmap</h1>
          </section>
          <section id="overview">
            <h1>Overview</h1>
          </section>
          <section id="references">
            <h1>References</h1>
          </section>
        </div>
      </Panel>
    </motion.main>
  );
};

WhitepaperPage.Layout = LandingLayout;

export default WhitepaperPage;
