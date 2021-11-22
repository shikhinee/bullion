//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'
import { useState } from "react";
import SideNavigation from "@/components/SideNavigation";
import styles from "./Panel.module.scss";
const rootPath = "/"

const Routes = {
  profile: {
    title: "Bullion",
    route: `${rootPath}/user`,
    subRoutes: [
      {
        title: "Intro",
        route: `${rootPath}/user/change-pass`,
      },
      {
        title: "Intro 2",
        route: `${rootPath}/user/bank-info`,
      },
    ],
  },

  request: {
    title: "Introduction",
    route: `${rootPath}/requests`,
  },

  project: {
    title: "Problem: Financial Exclusion",
    route: `${rootPath}/project`,
    subRoutes: [
      {
        title: "Token Ecosystem",
        route: `${rootPath}/project/list`,
      },
      {
        title: "Token Allocation",
        route: `${rootPath}/project/add`,
      },
    ],
  },
};
const Panel = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.panelContainer}>
        <div className={styles.tabsContainer}>
          <div
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(1)}
          >
            WHITEPAPER 1.0
          </div>
          <div
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(2)}
          >
            EXECUTIVE SUMMARY
          </div>
          <div
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(3)}
          >
            TEAM PROFILES
          </div>
        </div>
        <div className={styles.contentTabs}>
          <div
            className={
              toggleState === 1
                ? `${styles.content}  ${styles.activeContent}`
                : `${styles.content}`
            }
          >
            <SideNavigation
              routes={Routes}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas ratione velit animi error in, explicabo adipisci corporis eligendi et illo pariatur vero tempora ex laudantium corrupti molestiae provident sapiente.
            Ducimus architecto aliquam mollitia beatae velit provident officia itaque iure, distinctio, quia impedit obcaecati tenetur a? Dolore sed voluptates enim exercitationem nulla. Sapiente accusamus similique nihil libero consequuntur est voluptas!
            Sapiente ipsum iure aliquid similique sequi esse, totam quasi nam nobis cupiditate! Veritatis, sint accusantium ex doloribus nam consectetur et dolorum repellat fugit amet recusandae mollitia alias, maiores rem tempora.
            Maxime magnam ipsa veniam laudantium officia, dolores sapiente ad voluptas facilis saepe nisi ex assumenda nihil numquam cum dignissimos exercitationem odio corporis necessitatibus aspernatur, repellat, facere quibusdam. Modi, reiciendis ab.
            Quis, consequatur dolores. Iste ut repudiandae, eius odit non veritatis cupiditate consequatur assumenda sunt nisi minus nemo architecto beatae minima aut at tenetur eligendi. Facilis dolores culpa ex ratione dicta.
            Placeat hic fugit suscipit eligendi. Nemo iste dolore in, obcaecati, neque iusto error mollitia magnam aliquam quam, natus necessitatibus enim culpa laudantium ipsam facilis. Beatae ullam esse minus ut debitis!
            Quasi, explicabo tempora eos laborum sint harum est assumenda magnam, possimus natus aliquam. Magni adipisci eveniet possimus! Consequatur, nisi vel? Provident cum corporis magnam delectus minima eligendi, natus numquam quae.
            Ut error, culpa quo odit possimus libero consequuntur, dolorum voluptatum quos temporibus animi modi ab molestias, eaque commodi porro excepturi qui exercitationem repellendus itaque. Minima nulla delectus placeat aut corporis?</p>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.content}  ${styles.activeContent}`
                : `${styles.content}`
            }
          >
            <SideNavigation
              routes={Routes}
            />
          </div>

          <div
            className={
              toggleState === 3
                ? `${styles.content}  ${styles.activeContent}`
                : `${styles.content}`
            }
          >
            <SideNavigation
              routes={Routes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
