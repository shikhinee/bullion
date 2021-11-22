//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'
import DashboardLayout from '@/layouts/Dashboard';
//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './whitepaper.module.scss'

const WhitepaperPage = (props) => {
	 return (
		 <main className={styles.container}>
			
		</main>
	)
};
WhitepaperPage.Layout = DashboardLayout;

export default WhitepaperPage;
