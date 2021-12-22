//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const teamMembers = [
  {
    state: 1,
    fullName: "Naranzul Ganzorig",
    position: "Founder, CEO",
    imagePath: "",
    description:
      "Mrs Naranzul is a young leader who is a business woman, teacher and researcher. She has been educated in the UK for accounting and finance. She established her own financial enterprise which provides management consulting, accounting services and a research center. Along with chasing her career, she has been supporting the management of her father’s business, gold mining company, and sought a way of solvency for better financial source and services. Therefore, she is now extending her Finsigh Investment company with the Bullion Project where SME gold miners can get an efficient service through cheaper cost of capital compared to traditional banking systems which makes it a transformational start-up in Mongolia where it’s based on Hybrid Finance, HyFi system which many SME miners and investors can be hugely benefited.",
  },
  {
    state: 2,
    fullName: "Ganzorig Volooj",
    position: "Co-Founder, Investor",
    imagePath: "",
    description:
      "Ganzorig is a successful businessman who has over 20 years of experience in heavy industry in Mongolia. He is an electrical engineer who later studied further in China for foreign trade and economy which enabled him to cooperate with foreign investors. He started his business in the construction industry in 2010 and extended it into the mining sector from 2011. He is now running his gold mining business i.e. Khamtiin Ekh Bulag LLC in Bureghangai soum, Bulgan aimag, Mongolia.",
  },
  {
    state: 3,
    fullName: "Ireedui Zorigt",
    position:
      "Director: Community development, Social media Marketing & Gold Processing Engineer",
    imagePath: "",
    description:
      "He has worked for Khamtiin Ekh Bulag LLC for over 10 years since its establishment. His main area of expertise is gold processing which is the most interesting and critical part of the whole process. In recent years, he is also well known for his achievements as an athlete in heavy powerlifting. He is one of the main personnel in Khamtiin Ekh Bulag LLC who has the greatest discipline and a good example to other staff.",
  },
  {
    state: 4,
    fullName: "David Gong",
    position: "Director: Business Development (Global Crypto)",
    imagePath: "/davidgong.png",
    description:
      "David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.",
  },
  {
    state: 5,
    fullName: "Ranadip Saha",
    position: "CTO",
    imagePath: "/saha.jpeg",
    description:
      "Ranadip leads the design architecture and implementation of distributed systems. He has been working with various teams on Ethereum based projects since 2017. He has also worked on a patented reputation management system for mail prioritization and spam filtering using Hyperledger. His expertise lies in DeFi based projects such as governance and reward management systems. He has also worked previously as a full stack developer mainly working on backend systems based on Python and Node.Js and frontend web applications based on ReactJs.",
  },
  {
    state: 6,
    fullName: "Michael Johnson",
    position: "Mining Engineer (from TOA) & Metallurgis",
    imagePath: "/michael.jpg",
    description:
      "Mr. Johnson is a qualified engineer with more than 40 years of global experience in the heavy industry, mining and construction sector. He has managed projects for multinational corporations, enterprises, and startups. He is the President & founder of TOA Consulting, an international consultancy and project management company. His successful track record includes work with globally recognised corporations such as Arcelor Mittal, AHMSA, Mobarakeh Steel Company, SMS Siemac, and Iron Ore Canada, spanning China, North America, South East and Central Asia, and Iran.",
  },
  {
    state: 7,
    fullName: "Joseph Lee",
    position: "Legal, Economic Financial Advisor",
    imagePath: "/lee.png",
    description:
      "Joseph is an investment banker, lawyer, and blockchain entrepreneur with over 17 years of professional experience. As an investment banker he is specialised in corporate restructuring project financing, M&A, and operational ‘turnarounds’. His track record spans mining, energy infrastructure, agriculture, fintech, and blockchain. This experience includes economic policy advisory to central government agencies in North Asia. At present, Joseph also serves as a director and economic advisor to DIIANT, a global IT consulting firm and leader in digital transformation, specialising in design, technical architecture, product development and implementation of secure and scalable distributed systems. Born in Korea and raised in Australia, Joseph holds a Bachelor of Science (Actuarial Studies, Mathematics), Applied Finance, and a Juris Doctor.",
  },
  {
    state: 8,
    fullName: "Anar Amarjargal",
    position: "Economic Advisor",
    imagePath: "/anar.jpg",
    description:
      "Anar has over 10 years of professional experience in overseeing the day to day operations, translating strategy into actionable goals for business performance and growth throughout the greater Mongolia region. He is the former COO of the Mongolian Mortgage Corporation HFC LLC Independent Board Member for the Mongolian Stock Exchange, and the Director of Amarjargal Foundation NGO. Anar holds an MBA in Investment Management from the University of Finance and Economics of Mongolia, and a BA in Economics (emphasis on Intellectual Property) from the University of Colorado at Boulder.",
  },
  {
    state: 9,
    fullName: "Eric Choi",
    position: "Blockchain Advisor",
    imagePath: "",
    description:
      "Eric is one of key figures in the Asian blockchain industry. As a 7 year veteran of the global blockchain industry, Eric is acknowledged by past clients and business partners as someone who makes the impossible possible in the blockchain. Eric has a natural talent in applying blockchain technology to the most obscure of traditional market businesses and phenomena. He has a successful track record of blockchain implementation in traditional finance, online gaming, entertainment (TV and online), and infrastructure. Eric has consulted for more than 50 crypto projects to date. At present, Eric serves as the CEO of DIIANT, a global IT consulting firm and leader in digital transformation, where he oversees the design, technical architecture, product development and implementation of secure and scalable distributed systems.",
  },
];

const TeamMember = ({ state, ...props }) => {
  const member = teamMembers.find((member) => member.state === state);
  return (
    <motion.div
      key={state}
      className={styles.content}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.image}>
        {member.imagePath && (
          <Image
            width={"100%"}
            height={"100%"}
            src={member.imagePath}
            layout="responsive"
            objectFit="contain"
            alt="team"
          />
        )}
      </div>
      <div className={styles.header}>
        <h2>{member.fullName}</h2>
        <p>{member.position}</p>
      </div>
      <p>{member.description}</p>
    </motion.div>
  );
};

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
        <h3>BULLION Team</h3>
        <span>|</span>
        <div className={styles.blogo}>
          <Image
            src="/blogo.png"
            width={40}
            height={40}
            layout="responsive"
          ></Image>
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
              <h2>Ganzorig Volooj</h2>
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
              <h2>Ireedui Zorigt</h2>
              <p>Director</p>
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
              <h2>Ranadip Saha</h2>
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
              <h2>Michael Johnson</h2>
              <p>Mining Engineer (from TOA) & Metallurgist</p>
            </div>
            <div className={styles.heading}>
              <h3>BULLION Advisors</h3>
              <span>|</span>
              <div className={styles.blogo}>
                <Image
                  src="/blogo.png"
                  width={40}
                  height={40}
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div
              className={
                toggleState === 7
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(7)}
            >
              <h2>Joseph Lee</h2>
              <p>Legal, Economic Financial Advisor</p>
            </div>
            <div
              className={
                toggleState === 8
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(8)}
            >
              <h2>Anar Amarjargal</h2>
              <p>Economic advisor</p>
            </div>
            <div
              className={
                toggleState === 9
                  ? `${styles.tabs} ${styles.activeTabs}`
                  : `${styles.tabs}`
              }
              onClick={() => toggleTab(9)}
            >
              <h2>Eric Choi</h2>
              <p>Blockchain Advisor</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <AnimatePresence>
            {<TeamMember state={toggleState} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Team;
