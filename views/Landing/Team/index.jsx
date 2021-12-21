//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const Team = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
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

  const [toggleState, setToggleState] = useState(1);
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
              <h2>Ganzorig Volooj</h2>
              <p>Co-Founder, Investor</p>
            </div>
            <div
              className={
                toggleState === 2
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(2)}
            >
              <h2>Ireedui Zorigt</h2>
              <p>Director</p>
            </div>
            <div
              className={
                toggleState === 3
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(3)}
            >
              <h2>Burte Ujin</h2>
              <p>Social Media Marketing</p>
            </div>
            <div
              className={
                toggleState === 4
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(4)}
            >
              <h2>Naranzul Ganzorig</h2>
              <p>Founder, CEO</p>

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
              <h2>David Gong</h2>
              <p>Director: Business Development (Global Crypto)</p>
            </div>
            <div
              className={
                toggleState === 7
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(7)}
            >
              <h2>Michael Johnson</h2>
              <p>Mining Engineer (from TOA) & Metallurgist</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={
              toggleState === 1
                ? `${styles.content}  ${styles.activeContent}`
                : `${styles.content}`
            }
          >
            <div className={styles.image}>
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
            <h2>Ganzorig Volooj</h2>
              <p>Co-Founder, Investor</p>
            </div>
            <p>
              Ganzorig is a successful businessman who has over 20 years of experience in heavy industry in Mongolia. He is an electrical engineer who later studied further in China for foreign trade and economy which enabled him to cooperate with foreign investors. He started his business in the construction industry in 2010 and extended it into the mining sector from 2011. He is now running his gold mining business i.e. Khamtiin Ekh Bulag LLC in Bureghangai soum, Bulgan aimag, Mongolia.
            </p>
          </motion.div>
          <div
            className={
              toggleState === 2
                ? `${styles.content}  ${styles.activeContent}`
                : `${styles.content}`
            }
          >
            <div className={styles.image}>
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
            <h2>Ireedui Zorigt</h2>
              <p>Director: Community development, Social media Marketing & Gold Processing Engineer</p>
            </div>
            <p>
              He has worked for Khamtiin Ekh Bulag LLC for over 10 years since its establishment. His main area of expertise is gold processing which is the most interesting and critical part of the whole process. In recent years, he is also well known for his achievements as an athlete in heavy powerlifting. He is one of the main personnel in Khamtiin Ekh Bulag LLC who has the greatest discipline and a good example to other staff.
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
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
              <h2>Burte Ujin</h2>
              <p>Social Media Marketing</p>
            </div>
            <p>
              Burte-Ujin is an influencer, marketer, and entrepreneur of 11 years experience. In 2009, she founded “The Lof” Mongolia’s largest gaming center franchise, which has revolutionised the Mongolian Esports landscape. Burte-Ujin is also a board member of Mongolia’s Esports Association. Her influencer and marketing professional experience spans well known political campaigns, blockchain, TV, retail product endorsement and brand management. Graduating from Raffles International Institute, with a bachelors in commerce majoring in marketing , she is fluent in Mongolian, Russian and English.
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
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
            <h2>Naranzul Ganzorig</h2>
              <p>Founder, CEO</p>
            </div>
            <p>
              Mrs Naranzul is a young leader who is a business woman, teacher and researcher. She has been educated in the UK for accounting and finance. She established her own financial enterprise which provides management consulting, accounting services and a research center. Along with chasing her career, she has been supporting the management of her father’s business, gold mining company, and sought a way of solvency for better financial source and services. Therefore, she is now extending her Finsigh Investment company with the Bullion Project where SME gold miners can get an efficient service through cheaper cost of capital compared to traditional banking systems which makes it a transformational start-up in Mongolia where it’s based on Hybrid Finance, HyFi system which many SME miners and investors can be hugely benefited.
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
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
              <h2>Ranadip</h2>
              <p>CTO</p>
            </div>
            <p>
              Ranadip leads the design architecture and implementation of distributed systems. He has been working with various teams on Ethereum based projects since 2017. He has also worked on a patented reputation management system for mail prioritization and spam filtering using Hyperledger. His expertise lies in DeFi based projects such as governance and reward management systems. He has also worked previously as a full stack developer mainly working on backend systems based on Python and Node.Js and frontend web applications based on ReactJs.
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
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
            <h2>David Gong</h2>
              <p>Director: Business Development (Global Crypto)</p>
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
              <Image width={"100%"} height={"100%"} src="/davidgong.png" layout="responsive" objectFit="contain" alt="team" />
            </div>
            <div className={styles.header}>
              <h2>Michael Johnson</h2>
              <p>Mining Engineer (from TOA) & Metallurgist</p>
            </div>
            <p>
              Mr. Johnson is a qualified engineer with more than 40 years of global experience in the heavy industry, mining and construction sector. He has managed projects for multinational corporations, enterprises, and startups.  He is the President & founder of TOA Consulting, an international consultancy and project management company. His successful track record includes work with globally recognised corporations such as Arcelor Mittal, AHMSA, Mobarakeh Steel Company, SMS Siemac, and Iron Ore Canada, spanning China, North America, South East and Central Asia, and Iran.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
