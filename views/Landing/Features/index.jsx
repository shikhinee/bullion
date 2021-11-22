//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Features.module.scss'

const Features = (props) => {
	 return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>This is Features Page</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum modi mollitia molestias tempore debitis veritatis, perspiciatis, blanditiis cupiditate saepe quasi quod?</p>
			</div>
		</div>
	)
};

export default Features;
