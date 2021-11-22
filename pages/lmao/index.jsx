//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import LandingLayout from '@/layouts/Landing';
import styles from './lmao.module.scss'

const LmaoPage = (props) => {
	 return (
		 <main className={styles.container}>
			lmao
		</main>
	)
};

LmaoPage.Layout = LandingLayout

export default LmaoPage;
