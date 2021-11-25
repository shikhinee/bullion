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
            <h2>Abstract</h2>
            <p>
              This paper introduces BULLION, a Peer-to-Peer Lending Platform
              applying recent innovations in distributed ledger technology,
              specifically decentralized finance (DeFi), and proffering access
              to more equitable and efficient loans.
            </p>
            <h2>Version 1.0</h2>
            <p>
              Disclaimers: Information contained herein is subject to change.
              BULLION is not an investment product. BULLION is not intended in
              its design or distribution to be utilized as a form of investment,
              speculation, or as a financial product. No information herein
              constitutes financial advice. PLEASE do your OWN research before
              participating in BULLION. Neither the BULLION team nor any of its
              representative affiliates will ever solicit investment advice.
            </p>
          </section>
          <section id="introduction">
            <h1>1. Introduction</h1>
            <p>
              BULLION is the founders’ contribution to reducing marginalization
              and prejudice plaguing our economy, inducing a wide array of
              systemic instabilities. By drawing from the strengths of the
              former “Bretton Woods System” where currencies were backed by gold
              reserves, we enable the under-serviced savers and borrowers in the
              current banking and financial sector, to receive more equitable
              access to financial services.
            </p>
            <p>
              Recent advancements in the application of blockchain technology in
              the financial sector, specifically decentralized finance (DeFi),
              has enabled the creation of sophisticated decentralized financial
              primitives, akin to services offered in the legacy financial
              system, including loans, payments, and derivatives to name a few.
              By eliminating intermediaries, all together, with distributed
              ledger technology, BULLION aims to create a more accessible,
              equitable, and robust commodity-backed peer-to-peer banking system
              where participants of the BULLION reap all of the benefits.
            </p>
            <p>
              We champion the cause for non-major producers, savers, and
              investors of commodities, such as gold, platinum, silver, or
              copper, who are inadequately serviced by today’s legacy financial
              system. BULLION aims to contribute to financial inclusion by
              providing access to optimally priced capital to commodity owners
              and opportunities for better returns on capital for savers and
              investors.
            </p>
          </section>
          <section id="problem">
            <h1>2. Problem: Financial Exclusion</h1>
            <h2>2.1 Loan Access</h2>
            <h3>Small to Medium Enterprise (SME) Miners</h3>
            <p>
              Oftentimes, small-to-medium sized commodity businesses, such as
              miners or producers of gold, silver, platinum, and copper do not
              have access to the most competitively priced financial services,
              let alone a guarantee that even uncompetitively structured
              services will be available. Despite the large turnover of
              mining/commodity businesses, liquid assets in which they deal and
              the reliability of the turnover, there is a general commercial
              discontentment towards the current financial system.
            </p>
            <p className={styles.ulTitle}>The reasons as we see it:</p>
            <ul>
              <li>
                A banking and financial sector that does not understand the
                business and therefore cannot properly price risk/capital costs;
              </li>
              <li>
                The perceived sovereign risk of the country in which many mining
                assets are located reduces the financial attractiveness of the
                business to be financed;
              </li>
              <li>
                The lack of an adequate business/economic case for the current
                financial system to support or service such businesses. The cost
                of establishing infrastructure and developing new financial
                products may not currently be justified.
              </li>
            </ul>
            <p>What we proffer is supported by statistics:</p>
            <ul>
              <li>
                Over 4 in 6 small business owners are denied loans from
                financial institutions in 2020
              </li>
              <li>
                Big Banks
                <ul>
                  <li>
                    Granted approvals for <span className={styles.highlight}>13.6%</span> of loan applications to small
                    businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Small Banks
                <ul>
                  <li>
                    Granted approvals for <span className={styles.highlight}>18.5%</span> of loan applications to small
                    businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Institutional Lenders
                <ul>
                  <li>
                    Granted approvals for <span className={styles.highlight}>22%</span> of loan applications to small
                    businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Alternative Lenders
                <ul>
                  <li>
                    Granted approvals for{" "}
                    <span className={styles.highlight}>23%</span> of loan
                    applications to small businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Credit Unions
                <ul>
                  <li>
                    Granted approvals for{" "}
                    <span className={styles.highlight}>22%</span> of loan
                    applications to small businesses in 2020
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <h3>Neglected Savers and Investors</h3>
            </p>
            <p>
              The structure of the global economy and the financial system that
              supports it, allows for attractive wealth enhancing opportunities
              only to be presented to those persons or entities that already
              have substantial wealth or economic power. The result is a
              crystalised wealth structure with little or no economic “class”
              mobility. Economically marginalised individuals or nations remain
              that way.
            </p>
            <p>
              Savers and investors who are not of a size that fall within the
              threshold of commercial viability to be provided financial
              services and attractive wealth enhancing opportunities, remain as
              valuable capital to fuel enterprise operation and growth. Such
              capital just lacks the means of being efficiently pooled and
              mobilised to connect with where it is needed such as the
              aforementioned “SME Miners”. Solving this problem not only
              mobilises more capital in the market but it also presents
              otherwise off reach, wealth enhancing opportunities for the
              neglected savers and investors in the market.
            </p>

            <h3>Economic Instability</h3>
            <p>
              The economic system built on reckless monetary and fiscal policy
              and amplified by fractional banking has shown us many times over
              throughout history that economies precariously balancing between
              stability or order and economi chaos.
            </p>
            <p>
              Despite the decisions that have created and maintained this
              current situation being made by those who possess economic and
              political power, the ramifications of the symptomatic instability
              are borne by the people and entities that are least equipped to
              handle it.
            </p>
          </section>
          <section id="solution">
            <h1>3. Solution: BULLION DAO</h1>
            <p>
              The BULLION DAO proffers the decentralized and collateralized
              lending and borrowing of money between “Loan Takers” and “Loan
              Suppliers”. In the execution of a loan agreement in a
              decentralized environment, there exists many advantages over
              traditional bank loans. In particular, the absence of an
              intermediary renders middleman fees obsolete thereby reducing
              interest rates owed by debtors and enabling more of the
              apportioned interest to be delivered to the creditors. A global
              risk pricing system has been applied to determine the interest on
              borrowed money coupled with a gold equivalency standard to ensure
              loans and the corresponding interest rates are determined based on
              real-world measurements.
            </p>
            <table id="customers">
              <tr>
                <th>Country</th>
                <th>Loan Agreement</th>
                <th>Traditional Banks</th>
                <th>BULLION DAO</th>
              </tr>
              <tr>
                <td>Mongolia</td>
                <td>Interest Rate (Debtors)</td>
                <td>11-18%</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td></td>
                <td>Interest Rate (Creditors)</td>
                <td>1.5- 1.8%</td>
                <td></td>
              </tr>
              <tr>
                <td>Australia</td>
                <td>Interest Rate (Debtors)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Interest Rate (Creditors))</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>United States</td>
                <td>Interest Rate (Debtors)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Interest Rate (Creditors)</td>
                <td></td>
                <td></td>
              </tr>
            </table>

            <h2 id="solution-debtors">3.1 Loan Takers (Debtors)</h2>

            <h3>3.1.1 BULLION Gold (C-BAU)- How Gold Loans are obtained</h3>
            <p>
              “Loan Takers” are participants of the BULLION ecosystem who submit
              proof of a bank registered collateral deposit in the form of a
              “Certificate of Deposit” to verify ownership and provide evidence
              that the collateral is stored securely in a private vault.
            </p>
            <p>
              Upon verification of the “Certificate of Deposit” by the BULLION
              DAO, C-BAU, a 100% gold backed utility token representing 1 troy
              ounce (oz) of a gold reserve bar, is minted at a 1 troy oz to 1
              token ratio. The supply of C-BAU is determined based on the amount
              of gold that is in reserve. With more gold added to the reserve,
              more C-BAU will be minted. C-BAU can either be used to exchange
              for physical gold or staked to execute a loan agreement.
            </p>
            <p>
              In order to acquire loans through the BULLION DAO, Loan Takers
              must “stake” or “collateralize” their C-BAU at a 1 to 1 ratio.
              This means for every 1 C-BAU that is staked, a risk adjusted
              percentage of the value of 1 troy oz gold in USD, can be borrowed.
              This risk adjustment % or debt to equity ratio, is determined by
              perceived gold volatility. It will likely track the
              collateralisation ratios, set by the traditional banking sector.
              In other words, subject to volatility of the price of the
              collateral, a percentage of the value of the collateral at the
              time of staking will be the ultimate loan principal amount. For an
              example consider the information In table 3.1 the current
              collateral value to loan amount % is given as 82-87%, meaning that
              if gold is currently valued at $1800 per ounce, the borrower will
              be able to borrow $1,476-$1566 for every ounce staked.
            </p>
            <p>
              Table 3.1: Comparison of how BULLION will be more competitive than
              the current banking system. The figures given are for illustrative
              purposes.
            </p>
            <table>
              <tr>
                <th>Country</th>
                <th>Collateral</th>
                <th>Traditional Bank: Collateralization</th>
                <th>BULLION: Collateralization</th>
              </tr>
              <tr>
                <td>Mongolia</td>
                <td>Precious Metals (Gold, Silver, etc.)</td>
                <td>80-85% of Collateral</td>
                <td>82-87% of collateral</td>
              </tr>
            </table>
            <p>Table 3.1.1: Collateralization Comparison</p>
            <table>
              <tr>
                <th>Country</th>
                <th>Collateral</th>
                <th>Traditional Bank: Interest Rate</th>
                <th>BULLION: Interest Rate</th>
              </tr>
              <tr>
                <td>Mongolia</td>
                <td>Precious Metals (Gold, Silver, etc.)</td>
                <td>Banking System Prevailing rate</td>
                <td>Banking System Prevailing rate - Bullion Dao Discount</td>
              </tr>
            </table>
            <p>Table 3.1.2: Interest Rate Comparison</p>
            <h3>3.1.2 BULLION Gold (C-BAU)- How Interest is Paid</h3>
            <p>
              At maturity, the loan principal will be returned to the Loan
              Supplier in the currency on which the loan agreement was executed.
              Interest incurred from the loan will be made payable solely in the
              BULLION DAO native utility token, BAU. This forms the utility or
              use case for BAU, which will be offered to users through various
              token sales and listings. (see: 3.1.3 Loan Interest)
            </p>
            <h3>3.1.3 BULLION Gold (C-BAU)- Precious and Other Metals</h3>
            <p>
              A “Gold-Equivalency Standard” will be applied to all non-gold
              assets deposited as collateral prior to the minting of C-BAU. For
              example, if a certificate of deposit for 1troy oz of Gold is
              submitted, then 1 C-BAU is minted. However, if a certificate of
              deposit for a non-gold asset, such as for 1 troy oz of Silver is
              submitted, the following Gold-Equivalency Standard is applied for
              the conversion to C-BAU.
            </p>
            <h2 id="solution-creditors">3.2 Loan Suppliers (Creditors)</h2>
            <h3>3.2.1 Highly Liquid Stablecoins (USDT, USDC, BUSD, TUSD)</h3>
            <p>
              Loan Suppliers are participants who deposit any one of highly
              liquid stablecoins that are each pegged to 1 US dollar, such as
              USDT or USDC to the protocol. In return, Loan Suppliers will be
              rewarded interest based on loans supplied. The starting interest
              rate will be set at a market competitive APY (higher than other
              DeFi lending protocols such as Aave, Compound, etc.) and the
              longer one supplies the loans, the higher the interest rate.
              Interest on loans supplied will be made payable in the BULLION DAO
              native utility token, BAU. This forms the utility or use case for
              BAU, which will be offered to users through various token sales
              and listings. (see: 3.1.3 Loan Interest)
            </p>
            <h2 id="solution-interest">3.3 Loan Interest</h2>
            <h3>3.3.1 BULLION Utility Token (BAU)</h3>
            <p>
              BAU, is the native utility token for the BULLION DAO, used to pay
              off interest incurred in the loan agreement between Loan Takers
              and Loan Suppliers. This token will be listed and traded on both
              centralized and decentralized digital assets exchanges.
            </p>
            <p>
              In order to further incentivize participation on the protocol, an
              initial staking rewards pool will be launched to reward early
              ecosystem contributors. They can elect to pledge their BAU to earn
              rewards through the Initial Staking Rewards Pool with a variable
              APY (vesting schedule applied to mitigate dumping) or earn fixed
              rewards through the Perpetual Staking Rewards Pool.
            </p>
          </section>
          <section id="token">
            <h1>4. Bullion Token Economy</h1>
            <h2 id="token-ecosystem">
              4.1 Token Ecosystem- Bringing it all Together
            </h2>
            <h2 id="token-allocation">4.2 Token Allocation</h2>
          </section>
          <section id="partnerships">
            <h1>5. Partnerships</h1>
            <h3>TRADITIONAL FINANCE:</h3>
            <ul>
              <li>GOLOMT BANK</li>
              <li>CAPITRON BANK</li>
              <li>MANDAL FINANCIAL GROUP</li>
              <li>MANDAL INSURANCE</li>
            </ul>
            <h3>MINING COMPANIES:</h3>
            <ul>
              <li>Khamtiin Ekh Bulag LLC</li>
              <li>Govihangai Urum LLC</li>
              <li>Gleamstar LLC</li>
              <li>Darkhan Altantuul LLC</li>
              <li>Ulz Gol LLC</li>
            </ul>
            <h3>SUPPLIERS:</h3>
            <ul>
              <li>Hera Equipments</li>
              <li>Wagner Asia</li>
            </ul>
          </section>
          <section id="roadmap">
            <h1>6. Roadmap</h1>
            <ul>
              <li>IEO- Late November 2021</li>
              <li>International listing #1- Dec 2021</li>
              <li>Partnership Announcement #1</li>
              <li>International Listing #2 Dec 2021</li>
              <li>Partnership Announcement #2 Jan 2022</li>
              <li>Development Update Feb 2022</li>
              <li>International Listing #3 Feb 2022</li>
              <li>Partnership Announcement #3 March 2022</li>
              <li>Development Update April 2022</li>
            </ul>
          </section>
          <section id="overview">
            <h1>7. Overview</h1>
            <p>
              The importance of financial stability is well recognized globally,
              but inequality still pervades the infrastructure on which
              financial services are provided.
            </p>
          </section>
          <section id="references">
            <h1>8. References</h1>
            <h3>Mr Ganzorig Volooj - Founder, CEO</h3>
            <ul>
              <li>
                Mr Ganzorig is a successful businessman who has over 20 years of
                experience in heavy industry in Mongolia. He is an electrical
                engineer who later studied further in China for foreign trade
                and economy which enabled him to cooperate with foreign
                investors. He started his business in the construction industry
                in 2010 and extended it into the mining sector from 2011. He is
                now running his gold mining business i.e. Khamtiin Ekh Bulag LLC
                in Bureghangai soum, Bulgan aimag, Mongolia.
              </li>
            </ul>
            <h3>Michael Johnson - Mining Engineer (from TOA) & Metallurgist</h3>
            <ul>
              <li>
                Mr. Johnson is a qualified engineer with more than 40 years of
                global experience in the heavy industry, mining and construction
                sector. He has managed projects for multinational corporations,
                enterprises, and startups. He is the President & founder of TOA
                Consulting, an international consultancy and project management
                company. His successful track record includes work with globally
                recognised corporations such as Arcelor Mittal, AHMSA, Mobarakeh
                Steel Company, SMS Siemac, and Iron Ore Canada, spanning China,
                North America, South East and Central Asia, and Iran.
              </li>
            </ul>
            <h3>David Gong - Director: Business Development (Global Crypto)</h3>
            <ul>
              <li>
                David’s blockchain experience is primarily business development
                and research, always looking for opportunities to learn and
                provide a unique perspective. He is an early contributor to
                Columbia University’s undergraduate organization for distributed
                ledger technology, Blockchain@Columbia, and Researcher at the
                CBDC Blockchain Research Institute and Cypherium, a layer-1
                blockchain protocol for CBDC interoperability. He holds a B.A.
                in Political Science from Columbia University.
              </li>
            </ul>
            <h3>Ranadip - CTO</h3>
            <ul>
              <li>
                Ranadip leads the design architecture and implementation of
                distributed systems. He has been working with various teams on
                Ethereum based projects since 2017. He has also worked on a
                patented reputation management system for mail prioritization
                and spam filtering using Hyperledger. His expertise lies in DeFi
                based projects such as governance and reward management systems.
                He has also worked previously as a full stack developer mainly
                working on backend systems based on Python and Node.Js and
                frontend web applications based on ReactJs.
              </li>
            </ul>
            <h3>Naranzul Ganzorig - Financial Advisor</h3>
            <ul>
              <li>
                Mr Ganzorig is a successful businessman who has over 20 years of
                experience in heavy industry in Mongolia. He is an electrical
                engineer who later studied further in China for foreign trade
                and economy which enabled him to cooperate with foreign
                investors. He started his business in the construction industry
                in 2010 and extended it into the mining sector from 2011. He is
                now running his gold mining business i.e. Khamtiin Ekh Bulag LLC
                in Bureghangai soum, Bulgan aimag, Mongolia.
              </li>
            </ul>
            <h3>
              Ireedui Zorigt - Director: Community development, Social media
              Marketing & Gold Processing Engineer
            </h3>
            <ul>
              <li>
                Mr Ganzorig is a successful businessman who has over 20 years of
                experience in heavy industry in Mongolia. He is an electrical
                engineer who later studied further in China for foreign trade
                and economy which enabled him to cooperate with foreign
                investors. He started his business in the construction industry
                in 2010 and extended it into the mining sector from 2011. He is
                now running his gold mining business i.e. Khamtiin Ekh Bulag LLC
                in Bureghangai soum, Bulgan aimag, Mongolia.
              </li>
            </ul>
            <h3>Mr Ganzorig Ulziibayar - Policy and Economic Auditor</h3>
            <ul>
              <li>
                Mr Ganzorig is a successful businessman who has over 20 years of
                experience in heavy industry in Mongolia. He is an electrical
                engineer who later studied further in China for foreign trade
                and economy which enabled him to cooperate with foreign
                investors. He started his business in the construction industry
                in 2010 and extended it into the mining sector from 2011. He is
                now running his gold mining business i.e. Khamtiin Ekh Bulag LLC
                in Bureghangai soum, Bulgan aimag, Mongolia.
              </li>
            </ul>
            <h3>Anar Amarjargal - Economic advisor</h3>
            <ul>
              <li>
                {" "}
                Anar has over 10 years of professional experience in overseeing
                the day to day operations, translating strategy into actionable
                goals for business performance and growth throughout the greater
                Mongolia region. He is the former COO of the Mongolian Mortgage
                Corporation HFC LLC, Independent Board Member for the Mongolian
                Stock Exchange, and the Director of Amarjargal Foundation NGO.
                Anar holds an MBA in Investment Management from the University
                of Finance and Economics of Mongolia, and a BA in Economics
                (emphasis on Intellectual Property) from the University of
                Colorado at Boulder.
              </li>
            </ul>
            <h3>Burte Ujin - Social Media Marketing</h3>
            <ul>
              <li>
                Burte-Ujin is an influencer, marketer, and entrepreneur of 11
                years experience. In 2009, she founded “The Lof” Mongolia’s
                largest gaming center franchise, which has revolutionised the
                Mongolian Esports landscape. Burte-Ujin is also a board member
                of Mongolia’s Esports Association. Her influencer and marketing
                professional experience spans well known political campaigns,
                blockchain, TV, retail product endorsement and brand management.
                Graduating from Raffles International Institute, with a
                bachelors in commerce majoring in marketing , she is fluent in
                Mongolian, Russian and English.
              </li>
            </ul>
            <h3>Joseph Lee - Legal, Economic Financial Director</h3>
            <ul>
              <li>
                Joseph is an investment banker, lawyer, and blockchain
                entrepreneur with over 17 years of professional experience. As
                an investment banker he is specialised in corporate
                restructuring, project financing, M&A, and operational
                ‘turnarounds’. His track record spans mining, energy,
                infrastructure, agriculture, fintech, and blockchain. This
                experience includes economic policy advisory to central
                government agencies in North Asia. At present, Joseph also
                serves as a director and economic advisor to DIIANT, a global IT
                consulting firm and leader in digital transformation,
                specialising in design, technical architecture, product
                development and implementation of secure and scalable
                distributed systems. Born in Korea and raised in Australia,
                Joseph holds a Bachelor of Science (Actuarial Studies,
                Mathematics), Applied Finance, and a Juris Doctor.
              </li>
            </ul>
            <h3>Eric Choi- Blockchain Advisor</h3>
            <ul>
              <li>
                Eric is one of key figures in the Asian blockchain industry. As
                a 7 year veteran of the global blockchain industry, Eric is
                acknowledged by past clients and business partners as someone
                who makes the impossible possible in the blockchain. Eric has a
                natural talent in applying blockchain technology to the most
                obscure of traditional market businesses and phenomena. He has a
                successful track record of blockchain implementation in
                traditional finance, online gaming, entertainment (TV and
                online), and infrastructure. Eric has consulted for more than 50
                crypto projects to date. At present, Eric serves as the CEO of
                DIIANT, a global IT consulting firm and leader in digital
                transformation, where he oversees the design, technical
                architecture, product development and implementation of secure
                and scalable distributed systems.
              </li>
            </ul>
          </section>
        </div>
      </Panel>
    </motion.main>
  );
};

WhitepaperPage.Layout = LandingLayout;

export default WhitepaperPage;
