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
            <h1>Bullion</h1>
            <p>Joseph Lee, David Gong, Ranadip</p>
            <p>November 19, 2021</p>
            <h3>Abstract</h3>
            <p>This paper introduces BULLION, a Peer-to-Peer Lending Platform applying recent innovations in distributed ledger technology, specifically decentralized finance (DeFi), and proffering access to more equitable and efficient loans.</p>
            <h3>Version 1.0</h3>
            <p>Disclaimers: Information contained herein is subject to change. BULLION is not an investment product. BULLION is not intended in its design or distribution to be utilized as a form of investment, speculation, or as a financial product. No information herein constitutes financial advice. PLEASE do your OWN research before participating in BULLION. Neither the BULLION team nor any of its representative affiliates will ever solicit investment advice.</p>
          </section>
          <section id="introduction">
            <h1>Introduction</h1>
            <p>BULLION is the founders’ contribution to reducing marginalization and prejudice plaguing our economy, inducing a wide array of systemic instabilities. By drawing from the strengths of the former “Bretton Woods System” where currencies were backed by gold reserves, we enable the under-serviced savers and borrowers in the current banking and financial sector, to receive more equitable access to financial services. </p>
            <p>Recent advancements in the application of blockchain technology in the financial sector, specifically decentralized finance (DeFi), has enabled the creation of sophisticated decentralized financial primitives, akin to services offered in the legacy financial system, including loans, payments, and derivatives to name a few. By eliminating intermediaries, all together, with distributed ledger technology, BULLION aims to create a more accessible, equitable, and robust commodity-backed peer-to-peer banking system where participants of the BULLION reap all of the benefits.</p>
            <p>We champion the cause for non-major producers, savers, and investors of commodities, such as gold, platinum, silver, or copper, who are inadequately serviced by today’s legacy financial system. BULLION aims to contribute to financial inclusion by providing access to optimally priced capital to commodity owners and opportunities for better returns on capital for savers and investors.</p>
          </section>
          <section id="problem">
            <h1>Problem: Financial Exclusion</h1>
            <h2>2.1 Loan Access</h2>
            <i>Small to Medium Enterprise (SME) Miners</i>
            <p>
              Oftentimes, small-to-medium sized commodity businesses, such as miners or producers of gold, silver, platinum, and copper do not have access to the most competitively priced financial services, let alone a guarantee that even uncompetitively structured services will be available. Despite the large turnover of mining/commodity businesses, liquid assets in which they deal and the reliability of the turnover, there is a general commercial discontentment towards the current financial system.
            </p>
            <p>The reasons as we see it:</p>
            <ul>
              <li>A banking and financial sector that does not understand the business and therefore cannot properly price risk/capital costs;
              </li>
              <li>The perceived sovereign risk of the country in which many mining assets are located reduces the financial attractiveness of the business to be financed;
              </li>
              <li>The lack of an adequate business/economic case for the current financial system to support or service such businesses. The cost of establishing infrastructure and developing new financial products may not currently be justified.
              </li>
            </ul>
            <p>What we proffer is supported by statistics:</p>
            <ul>
              <li>Over 4 in 6 small business owners are denied loans from financial institutions in 2020</li>
              <li>Big Banks</li>
              <dd>Granted approvals for 13.6% of loan applications to small businesses in 2020</dd>
              <li>Small Banks</li>
              <li>Institutional Lenders</li>
              <li>Alternative Lenders</li>
              <li>Credit Unions</li>
            </ul>
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
