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
  const [toggleState, setToggleState] = useState({
    whitePaper: {
      isOpen: true,
      routes: WhitePaperRoutes,
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tab}>
          <span>WHITEPAPER 1.0</span>
        </div>

        <div className={styles.tab}>
          <span>EXECUTIVE SUMMARY</span>
        </div>

        <div className={styles.tab}>
          <span>TEAM PROFILES</span>
        </div>
      </div>

      <div className={styles.contentTabs}>
        <SideNavigation routes={WhitePaperRoutes} />

        {children}
      </div>
    </div>
  );
};

export default Panel;
