//Next, React (core node_modules) imports must be placed here
import Image from 'next/Image'
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from './About.module.scss'
import next from 'next';
const About = (props) => {
	return (
		<div className={styles.container} id="about">
			<div className={styles.content}>
				<div className={styles.left}>
					<h1>This is About Page</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum modi mollitia molestias tempore debitis veritatis, perspiciatis, blanditiis cupiditate saepe quasi quod?</p>
				</div>
				<div className={styles.right}>
					<Image width='500' height='600' src='/mine.jpeg'></Image>
				</div>
			</div>
		</div>
	)
};

export default About;
