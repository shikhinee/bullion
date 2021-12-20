//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Features.module.scss'

const Features = (props) => {
	 return (
		 <div className={styles.container}>
			<h3>Bullion Features</h3>
			<div className={styles.feature}>
				<div className={styles.image}>
				<Image src="/blogo.png" width={100} height={100} layout="responsive"></Image>
				</div>
				<div className={styles.content}>
					<h2>Interest Payment & Loan Obligations</h2>
					<p>TROY, is the platform native utility token on BULLION, featuring a wide array of DeFi features (staking, payments, loans, collateralization, etc.) used to reward Creditors of the protocol for interest incurred as a result of the loan agreement.</p>
				</div>
			</div>
			<div className={styles.feature}>
			<div className={styles.image}>
				<Image src="/ilogo.png" width={100} height={100} layout="responsive"></Image>
				</div>
				<div className={styles.content}>
					<h2>Lender & Borrower Matching</h2>
					<p>C-TROY is minted to represent a loan agreement between the Debtor and Creditor, and the certificate of deposits received from a recognized bank or vault verifies the existence of the gold. </p>
				</div>
			</div>
		</div>
	)
};

export default Features;
