//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const Team = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isClicked && activeAnchor !== "#team") {
      // animation.start("hidden");
      return;
    }

    if (isClicked) {
      // animation.start("visible");
    } else if (inView) {
      // animation.start("visible");
      setActiveAnchor("#team");
    } else {
      // animation.start("hidden");
    }
  }, [inView]);

  const [toggleState, setToggleState] = useState(4);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.container} id="team" ref={ref}>
      <div className={styles.heading}>
        <h3>Why BULLION</h3>
        <span>|</span>
        <div className={styles.blogo}>
          <Image src="/blogo.png" width={40} height={40} layout="responsive"></Image>
        </div>
      </div>
      <div className={styles.team}>
      <div className={styles.left}>
        <div className={styles.tabsContainer}>
          <div
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(1)}
          >
            <h2>Naranzul Ganzorig</h2>
            <p>Founder, CEO</p>
          </div>
          <div
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(2)}
          >
            <h2>Mr Ganzorig Volooj</h2>
            <p>Co-Founder, Investor</p>
          </div>
          <div
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(3)}
          >
            <h2>Michael Johnson</h2>
            <p>Mining Engineer (from TOA) & Metallurgist</p>
          </div>
          <div
            className={
              toggleState === 4
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(4)}
          >
            <h2>David Gong</h2>
            <p>Director: Business Development (Global Crypto)</p>
          </div>
          <div
            className={
              toggleState === 5
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(5)}
          >
            <h2>Ranadip</h2>
            <p>CTO</p>
          </div>
          <div
            className={
              toggleState === 6
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(6)}
          >
            <h2>Ireedui Zorigt</h2>
            <p>Director</p>
          </div>
          <div
            className={
              toggleState === 7
                ? `${styles.tabs} ${styles.activeTabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(7)}
          >
            <h2>Burte Ujin</h2>
            <p>Social Media Marketing</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={
            toggleState === 1
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 2
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 3
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 4
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 5
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 6
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
        <div
          className={
            toggleState === 7
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <div className={styles.image}>
          <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team"/>
          </div>
          <div className={styles.header}>
          <h2>David Gong</h2>
          <p>Director: Business</p>
          <p>Development (Global Crypto)</p>
          </div>
          <p>
          David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Team;
