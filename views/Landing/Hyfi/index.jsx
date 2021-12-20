//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Hyfi.module.scss'

const Hyfi = (props) => {
	 return (
		 <div className={styles.container}>
			<div className={styles.cta}>
				 <h2>HyFi Ecosystem</h2>
				 <div className={styles.arrow}>
				 <Image src="/arrowlong.svg" width={130} height={50} layout="responsive"/>
				 </div>
		 	</div>
		</div>
	)
};

export default Hyfi;
