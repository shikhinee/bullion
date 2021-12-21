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
              This paper introduces BULLION, a gold-backed DeFi lending platform applying recent innovations in distributed ledger technology, specifically decentralized finance (DeFi), to proffer access to more equitable, efficient, peer-to-peer loans.
            </p>
            <h2>Version 1.0</h2>
            <p>
              Disclaimers: Information contained herein is subject to change. BULLION is not an investment product. BULLION is not intended in its design or distribution to be utilized as a form of investment, speculation, or as a financial product. No information herein constitutes financial advice. PLEASE do your OWN research before participating in BULLION. Neither the BULLION team nor any of its representative affiliates will ever solicit investment advice.
            </p>
          </section>
          <section id="introduction">
            <h1>1. Introduction</h1>
            <p>
              BULLION is the founders’ contribution to reducing marginalization and prejudice plaguing our global economy that has induced a wide array of systemic instabilities. By drawing from the strengths of the former  &quot;Bretton Woods System&quot; where currencies were backed by gold reserves, we not only seek to remedy the economic shock that has perturbed the under-serviced members of society, but also proffer an opportunity to become productive economic agents, at liberty, to realize their economic aspirations. Focusing on the issues plaguing global finance, specifically, the market for loans, BULLION connects savers and borrowers in the current banking and financial sector to receive equitable access to more competitive financial services all within a decentralized environment.
            </p>
            <p>
              Recent advancements of blockchain technology, specifically decentralized finance (DeFi), have enabled the creation of sophisticated decentralized financial primitives that are akin to services offered in the legacy financial system, including loans, payments, and derivatives, to name a few. By eliminating intermediaries altogether, BULLION aims to create a more accessible, equitable, and economically attractive banking system where participants of BULLION reap all of the benefits. We champion the cause for non-major producers, savers, and investors of commodities, such as gold, platinum, silver, or copper, who are inadequately serviced by today’s legacy financial system. BULLION aims to contribute to financial inclusion by providing access to optimally priced capital to commodity owners and opportunities for better returns on capital for savers and investors.
            </p>
            <p>
              BULLION’s approach to delivering more equitable financial services to the world constitutes a variety of dynamics at play in the evolution of the global financial system, including the implementation of advanced digital technologies to legacy systems. The founders of BULLION assert that the new shift in financial paradigm is not in the continued separation of traditional and DeFi centric economic agents, but one borne of cooperation and inclusion. It is the merger of Centralized Finance (CeFi) and Decentralized Finance (DeFi) that we call “HyFi”, short for Hybrid Finance, to transpire advances in today’s economic system.
            </p>
          </section>
          <section id="problem">
            <h1>2. Problem:</h1>
            <h2 id="financial-exclusion">2.1 Financial Exclusion</h2>
            <h3>2.1.1 Access Problem Faced by Small to Medium Enterprise (SME) Miners</h3>
            <p>
              Often, small-to-medium-sized commodity businesses do not have access to the most competitively priced financial services, let alone a guarantee that even noncompetitively structured services will be available. Despite the significant turnover of mining/commodity businesses, the liquid assets they deal with, and the turnover&apos;s reliability, there is a general commercial discontentment towards the current financial system.
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
                    Granted approvals for{" "}
                    <span className={styles.highlight}>13.6%</span> of loan
                    applications to small businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Small Banks
                <ul>
                  <li>
                    Granted approvals for{" "}
                    <span className={styles.highlight}>18.5%</span> of loan
                    applications to small businesses in 2020
                  </li>
                </ul>
              </li>
              <li>
                Institutional Lenders
                <ul>
                  <li>
                    Granted approvals for{" "}
                    <span className={styles.highlight}>22%</span> of loan
                    applications to small businesses in 2020
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
            <h3>2.1.2 Neglected Savers and Investors</h3>
            <p>
              The structure of the global economy and the financial system that supports it allows for attractive wealth-enhancing opportunities only to be presented to those individuals or entities that already have substantial wealth or economic power. The result is a crystalized wealth structure with little or no economic “class” mobility. Economically marginalized individuals or nations remain challenged without recourse for social mobility.
            </p>
            <p>
              Savers and investors who are not of a size that falls within the threshold of commercial viability to be provided financial services and attractive wealth-enhancing opportunities remain valuable capital to fuel enterprise operation and growth. Such capital lacks the means of being efficiently pooled and mobilized to connect with where it is needed, such as the aforementioned “SME Miners.” Solving this problem mobilizes more capital in the market and presents otherwise off-reach, wealth-enhancing opportunities for the neglected savers and investors.
            </p>

            <h3>2.1.3 Economic Instability</h3>
            <p>
              The economic system built on reckless monetary and fiscal policy, further amplified by fractional banking, has shown us many times throughout history that economies precariously balance between stability or order and economic chaos (The Hill).
            </p>
            <p>
              Despite the decisions that have been created and maintained, this current situation is being exacerbated by those who possess economic and political power. The ramifications of the symptomatic instability are borne by the people and entities that are least equipped to handle it.
            </p>
          </section>
          <section id="solution">
            <h1>3. Solution: BULLION</h1>
            <p>
              BULLION proffers the decentralized and collateralized lending and borrowing of money between Debtors and Creditors. In the execution of a loan agreement in a decentralized environment, there exists many advantages over traditional bank loans. In particular, the absence of an intermediary renders middleman fees obsolete thereby reducing interest rates owed by debtors and enabling more of the apportioned interest to be delivered to the creditors. A global risk pricing system has been applied to determine the interest on borrowed money coupled with a gold equivalency standard to ensure loans and the corresponding interest rates are determined based on real-world measurements.
            </p>
            <h2 id="financial-inclusion">3.1 Financial Inclusion</h2>

            <h3>3.1.1 C-TROY: Loan Agreement</h3>
            <p>
              C-TROY Token is a digital loan agreement, secured on-chain, entitling the Creditor to interest payments based on Bullion’s proprietary interest optimization mechanism. The following factors are considered in the execution of the loan agreement:
            </p>
            <ol>
              <li><h4>Interest Rate (Creditor)</h4>
                <p>The loan agreement can be executed once there is a match of the loan amount and the corresponding interest rate. Creditors can earn interest for supplying loans to Debtors through the TROY token. </p></li>
              <li><h4>Proof-of-Collateral (Debtor)</h4>
                <p>Submit a bank registered collateral in the form of a “Certificate of Deposit” to verify ownership and provide evidence that the collateral is stored securely in a private vault. The credibility of the debtor is secured through the provision of the proof of collateral, serving as a reliable means to verify the legitimacy of the debtor.</p></li>
            </ol>
            <p>
              Once the two aforementioned conditions have been satisfied, the loan agreement will be executed thereby minting C-TROY token. This safeguards Creditors from an event of default by the Debtor, ensuring the return of their principal and interest within the agreed upon time, whilst providing Debtors with the credibility required to obtain the loans.
            </p>
            <div className={styles.tableContainer}>

            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Collateral</th>
                  <th>Traditional Bank: Interest Rate</th>
                  <th>BULLION: Interest Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mongolia</td>
                  <td>Precious Metals (Gold, Silver, etc.)</td>
                  <td>Banking System Prevailing rate</td>
                  <td>Banking System Prevailing rate - Bullion Dao Discount</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>Table 3.1.1: Collateralization Comparison</p>
            <p>
              A “Gold-Equivalency Standard” will be applied to all non-gold assets deposited as collateral prior to the minting of the loan agreement, C-TROY. If a  certificate of deposit for a non-gold asset, such as for 1 troy oz of Silver, the following Gold-Equivalency Standard is applied for the conversion to C-TROY.
            </p>
            <div className={styles.tableContainer}>

            <table id="customers">
              <thead>
                <tr>
                  <th>Steps</th>
                  <th>“Gold Equivalency Standard”</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1 troy oz of Gold = $1,849 <a href="https://data.chain.link/ethereum/mainnet/commodities/xau-usd">(XAU/USD)</a> | 1 troy oz of Silver = $24.59 <a href="https://data.chain.link/ethereum/mainnet/commodities/xag-usd">(XAG/USD)</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>$1,849 / $24.59 = 75.19</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1 troy oz of Gold = 75.19 troy oz of Silver</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>1/75.19 = 0.0133 oz of Gold in 1 troy oz of Silver</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mint 0.0133 C-TROY</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>
              NB: this is an illustrative example, and actual calculations will be based on prevailing market rates.
            </p>
            <h3>3.1.2 TROY: Interest Token</h3>
            <p>
            Interest is paid by Debtors in the form of the Bullion native utility token, TROY. The movements in the TROY token will allow Debtors (payers of TROY) and Creditors (receivers of TROY), to potentially reduce their interest rate exposure or increase the amount received in interest respectively. This forms the utility or use case for TROY, which will be offered to users through various token sales and listings.
            </p>
            <h3>3.1.3 Depositing & Earning</h3>
            <p>
            Creditors are participants who deposit any one of highly liquid stablecoins that are each pegged to 1 US dollar, such as USDT or USDC to the protocol. In return, Creditors will be rewarded interest based on loans supplied. There are two ways for Creditors to earn interest, a “Base Rate” and “Alpha Rate”. 
            </p>
            <ul>
              <li>
              <h4>Base Rate:</h4>
              <p>The starting base interest rate will be set at a market competitive APY (equal to other DeFi lending protocols such as Aave, Compound, etc). Interest on loans supplied will be made payable in the BULLION native utility token, TROY.</p>
              </li>
              <li>
                <h4>Alpha Rate:</h4>
                <p>For every executed loan agreement, interest is optimized in accordance with Bullion’s proprietary interest optimization mechanism. (this is our way of optimizing the inefficiencies of centralization).</p>
              </li>
            </ul>
            <p>In order to further incentivize participation on the protocol, an initial staking rewards pool will be launched to reward early ecosystem contributors. They can elect to pledge their TROY to earn rewards through the Initial Staking Rewards Pool with a variable APY (vesting schedule applied to mitigate dumping) or earn fixed rewards through the Perpetual Staking Rewards Pool.</p>
          </section>
          <section id="token">
            <h1>4. Bullion Token Economy</h1>
            <h2 id="token-ecosystem">
              4.1 Token Ecosystem- Bringing it all Together
            </h2>
            <h2 id="token-allocation">4.2 Token Allocation</h2>
            <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Allocation</th>
                  <th>Amount (TROY)</th>
                  <th>% of Total Supply</th>
                  <th>Issuance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Private Sale</td>
                  <td>350,000,000</td>
                  <td>6%</td>
                  <td>Initial Circulating Supply. No Vesting</td>
                </tr>
                <tr>
                  <td>Public Sale</td>
                  <td>1,150,000,000</td>
                  <td>19%</td>
                  <td>Initial Circulating Supply. No Vesting</td>
                </tr>
                <tr>
                  <td>Initial Staking Rewards Pool</td>
                  <td>1,200,000,000</td>
                  <td>20%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Perpetual Rewards Pool</td>
                  <td>300,000,000</td>
                  <td>5%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Developers Pool</td>
                  <td>300,000,000</td>
                  <td>5%</td>
                  <td>Vesting until necessary for use. Controlled by the Foundation for the continued development of the protocol</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>600,000,000</td>
                  <td>10%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Operations</td>
                  <td>600,000,000</td>
                  <td>10%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>240,000,000</td>
                  <td>4%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Partners</td>
                  <td>720,000,000</td>
                  <td>12%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Founders</td>
                  <td>300,000,000</td>
                  <td>5%</td>
                  <td>20% Initial Circulating Supply. Remaining vested and released per month over 12 months</td>
                </tr>
                <tr>
                  <td>Advisors</td>
                  <td>240,000,000</td>
                  <td>4%</td>
                  <td>20% Initial Circulating Supply. Remaining vested and released per month over 12 months</td>
                </tr>
                <tr>
                  <td>TOTAL SUPPLY</td>
                  <td>60,000,000,000</td>
                  <td>100%</td>
                  <td>18,480,000,000 TROY Initial Circulating Supply</td>
                </tr>
              </tbody>
            </table>
            </div>
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
              <li>International IEO</li>
              <li>Mongolian listing</li>
              <li>Decentralized Exchange listing #1</li>
              <li>Partnership Announcement #1</li>
              <li>International Listing #2</li>
              <li>Partnership Announcement #2</li>
              <li>Development Update</li>
              <li>International Listing #3</li>
              <li>Partnership Announcement #3</li>
              <li>Development Update</li>
            </ul>
          </section>
          <section id="overview">
            <h1>7. Overview</h1>
            <p>
            Bullion is a decentralized gold-backed liquidity market protocol where users can participate as Creditors or Debtors. Just like in traditional finance, Creditors provide liquidity to the Bullion loan market to earn interest for a deposit and are also subject to receive additional interest upon a match with a Debtor through executing a loan agreement. Debtors are able to borrow against their collateralized asset, gold, to fund their business operations and by borrowing, able to obtain liquidity (working capital) without selling their assets and hence, are entitled to the potential upside value gain of their underlying collateral. The importance of financial stability is well recognized globally, but inequality still pervades the infrastructure on which financial services are provided. By applying a global risk pricing mechanism and a gold equivalency standard, coupled with advances in distributed ledger technology, Bullion offers an alternative, peer to peer means to obtain loans thereby enhancing access to capital.
            </p>
          </section>
          <section id="team">
            <h1>8. Team</h1>
            <h3>Naranzul Ganzorig - Founder, CEO</h3>
            <ul>
              <li>
              Mrs Naranzul is a young leader who is a business woman, teacher and researcher. She has been educated in the UK for accounting and finance. She established her own financial enterprise which provides management consulting, accounting services and a research center. Along with chasing her career, she has been supporting the management of her father’s business, gold mining company, and sought a way of solvency for better financial source and services. Therefore, she is now extending her Finsigh Investment company with the Bullion Project where SME gold miners can get an efficient service through cheaper cost of capital compared to traditional banking systems which makes it a transformational start-up in Mongolia where it’s based on Hybrid Finance, HyFi system which many SME miners and investors can be hugely benefited.
              </li>
            </ul>
            {/* <h3>Ganzorig Volooj - Co-Founder, Investor</h3>
            <ul>
              <li>
                Ganzorig is a successful businessman who has over 20 years of experience in heavy industry in Mongolia. He is an electrical engineer who later studied further in China for foreign trade and economy which enabled him to cooperate with foreign investors. He started his business in the construction industry in 2010 and extended it into the mining sector from 2011. He is now running his gold mining business i.e. Khamtiin Ekh Bulag LLC in Bureghangai soum, Bulgan aimag, Mongolia.
              </li>
            </ul> */}
            <h3>Michael Johnson - Mining Engineer (from TOA) & Metallurgist</h3>
            <ul>
              <li>
              Mr. Johnson is a qualified engineer with more than 40 years of global experience in the heavy industry, mining and construction sector. He has managed projects for multinational corporations, enterprises, and startups.  He is the President & founder of TOA Consulting, an international consultancy and project management company. His successful track record includes work with globally recognised corporations such as Arcelor Mittal, AHMSA, Mobarakeh Steel Company, SMS Siemac, and Iron Ore Canada, spanning China, North America, South East and Central Asia, and Iran.
              </li>
            </ul>
            <h3>David Gong- Director: Business Development (Global Crypto)</h3>
            <ul>
              <li>
              David’s blockchain experience is primarily business development and research, always looking for opportunities to learn and provide a unique perspective. He is an early contributor to Columbia University’s undergraduate organization for distributed ledger technology, Blockchain@Columbia, and Researcher at the CBDC Blockchain Research Institute and Cypherium, a layer-1 blockchain protocol for CBDC interoperability. He holds a B.A. in Political Science from Columbia University.
              </li>
            </ul>
            <h3>Ranadip Saha - CTO</h3>
            <ul>
              <li>
              Ranadip leads the design architecture and implementation of distributed systems. He has been working with various teams on Ethereum based projects since 2017. He has also worked on a patented reputation management system for mail prioritization and spam filtering using Hyperledger. His expertise lies in DeFi based projects such as governance and reward management systems. He has also worked previously as a full stack developer mainly working on backend systems based on Python and Node.Js and frontend web applications based on ReactJs.
              </li>
            </ul>
            {/* <h3>
              Ireedui Zorigt - Director: Community development, Social media
              Marketing & Gold Processing Engineer
            </h3>
            <ul>
              <li>
              He has worked for Khamtiin Ekh Bulag LLC for over 10 years since its establishment. His main area of expertise is gold processing which is the most interesting and critical part of the whole process. In recent years, he is also well known for his achievements as an athlete in heavy powerlifting. He is one of the main personnel in Khamtiin Ekh Bulag LLC who has the greatest discipline and a good example to other staff.
              </li>
            </ul> */}
            {/* <h3>Burte Ujin- Social Media Marketing</h3>
            <ul>
              <li>
              Burte-Ujin is an influencer, marketer, and entrepreneur of 11 years experience. In 2009, she founded “The Lof” Mongolia’s largest gaming center franchise, which has revolutionised the Mongolian Esports landscape. Burte-Ujin is also a board member of Mongolia’s Esports Association. Her influencer and marketing professional experience spans well known political campaigns, blockchain, TV, retail product endorsement and brand management. Graduating from Raffles International Institute, with a bachelors in commerce majoring in marketing , she is fluent in Mongolian, Russian and English.
              </li>
            </ul> */}
            </section>
            <section id="advisors">
            <h1>9. Advisors</h1>
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
          <section id="references">
          <h1>10. References</h1>
            <ul>
              <li><a href="https://thehill.com/opinion/finance/504702-the-feds-reckless-experiment">https://thehill.com/opinion/finance/504702-the-feds-reckless-experiment</a></li>
              <li><a href="https://ncrc.org/disinvestment/">https://ncrc.org/disinvestment/</a></li>
              <li><a href="https://www.iowapublicradio.org/2020-12-15/unequal-access-to-banking-and-loans-works-against-black-business-owners">https://www.iowapublicradio.org/2020-12-15/unequal-access-to-banking-and-loans-works-against-black-business-owners</a></li>
              <li><a href="https://news.crunchbase.com/news/small-business-startup-capital-black-businesses/">https://news.crunchbase.com/news/small-business-startup-capital-black-businesses/</a></li>
            </ul>
          </section>
        </div>
      </Panel>
    </motion.main>
  );
};

WhitepaperPage.Layout = LandingLayout;

export default WhitepaperPage;
