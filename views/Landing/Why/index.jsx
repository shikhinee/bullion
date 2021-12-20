//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Why.module.scss'

const Why = (props) => {
	 return (
		 <div className={styles.container}>
			<div className={styles.giphy}>
			<Image src="/bullion.gif" className={styles.gif} layout="fill"></Image>
			</div>
			<div className={styles.horizontal}>
				<div className={styles.loanAccess}>
					<div className={styles.heading}>
					<h3>Why BULLION</h3>
					<span>|</span>
					<div className={styles.blogo}>
					<Image src="/blogo.png" width={40} height={40} layout="responsive"></Image>
					</div>
					</div>
					<h2>Loan Access</h2>
					<p>The BULLION liquidity market protocol provides the means for underserved  “savers” and “borrowers”, especially small-to-midsize businesses in traditional finance, to receive equitable access to competitively priced financial services.</p>
				</div>
				<div className={styles.volatility}>
					<h2>Volatility & Lending <br /> System Stability</h2>
					<p>In order to reconcile the attraction for liquidity providing speculators with stability desired by lenders and borrowers, TROY token will be subject to an equilibrium seeking supply control mechanism.</p>
				</div>
				<div className={styles.hyfi}>
					<h2>Hybrid Finance (HyFi)</h2>
					<p>Hybrid Finance or “HyFi '' draws strengths of the Bretton Woods System and facilitates asset tokenization to bring real world value to the blockchain. Benefits of tokenization include open access, on-chain transparency, and reduced transactional friction experienced by legacy systems.</p>
				</div>
			</div>
		</div>
	)
};

export default Why;
