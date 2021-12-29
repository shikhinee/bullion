//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'
import { useState } from "react";
import SideNavigation from "@/components/SideNavigation";
import styles from "./Panel.module.scss";
const rootPath = "/whitepaper";

const WhitePaperRoutes = {
  // bullion: {
  //   title: "Bullion",
  //   route: `${rootPath}/#bullion`,
  // },

  introduction: {
    title: "Introduction",
    route: `${rootPath}/#introduction`,
  },

  problem: {
    title: "Problem:",
    route: `${rootPath}/#problem`,
    subRoutes: [
      {
        title: "Financial Exclusion",
        route: `${rootPath}/#financial-exclusion`,
      },
    ],
  },

  solution: {
    title: "Solution: Bullion",
    route: `${rootPath}/#solution`,
    subRoutes: [
      {
        title: "Financial Inclusion",
        route: `${rootPath}/#financial-inclusion`,
      },
    ],
  },

  token: {
    title: "Bullion Token Economy",
    route: `${rootPath}/#token`,
    subRoutes: [
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
  team: {
    title: "Team",
    route: `${rootPath}/#team`,
  },
  advisors: {
    title: "Advisors",
    route: `${rootPath}/#advisors`,
  },

  references: {
    title: "References",
    route: `${rootPath}/#references`,
  },
};

const Panel = ({ children, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tab}>
          <span>WHITEPAPER</span>
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
