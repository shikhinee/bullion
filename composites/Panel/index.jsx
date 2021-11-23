//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'
import { useState } from "react";
import SideNavigation from "@/components/SideNavigation";
import styles from "./Panel.module.scss";
const rootPath = "/whitepaper";

const WhitePaperRoutes = {
  bullion: {
    title: "Bullion",
    route: `${rootPath}/#bullion`,
  },

  introduction: {
    title: "Introduction",
    route: `${rootPath}/#introduction`,
  },

  problem: {
    title: "Problem: Financial Exclusion",
    route: `${rootPath}/#problem`,
  },

  solution: {
    title: "Solution: Bullion Dao",
    route: `${rootPath}/#solution`,
    subRoutes: [
      {
        title: "Loan Takers (Debtors)",
        route: `${rootPath}/#solution-debtors`,
      },
      {
        title: "Loan Suppliers (Creditors)",
        route: `${rootPath}/#solution-creditors`,
      },
      {
        title: "Loan Interest",
        route: `${rootPath}/#solution-interest`,
      },
    ],
  },

  token: {
    title: "Bullion Token Economy",
    route: `${rootPath}/#token`,
    subRoutes: [
      {
        title: "Token Ecosystem",
        route: `${rootPath}/#token-ecosystem`,
      },
      {
        title: "Token Allocation",
        route: `${rootPath}/#token-allocation`,
      },
    ],
  },

  partnerships: {
    title: "Partnerships",
    route: `${rootPath}/#partnerships`,
  },

  roadmap: {
    title: "Roadmap",
    route: `${rootPath}/#roadmap`,
  },

  overview: {
    title: "Overview",
    route: `${rootPath}/#overview`,
  },

  references: {
    title: "References",
    route: `${rootPath}/#references`,
  },
};

const Panel = ({ children, ...props }) => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => setToggleState(1)}
        >
          <h2>WHITEPAPER 1.0</h2>
        </div>

        {/* <div
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => setToggleState(2)}
        >
          <h2>EXECUTIVE SUMMARY</h2>
        </div>

        <div
          className={
            toggleState === 3
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => setToggleState(3)}
        >
          <h2>TEAM PROFILES</h2>
        </div> */}
      </div>

      <div className={styles.contentTabs}>
        <SideNavigation
          show={toggleState === 1 ? true : false}
          routes={WhitePaperRoutes}
        />

        {children}

        {/* <div
          className={
            toggleState === 2
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <SideNavigation routes={Routes} />
        </div> */}

        {/* <div
          className={
            toggleState === 3
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <SideNavigation routes={Routes} />
        </div> */}
      </div>
    </div>
  );
};

export default Panel;
