//Next, React (core node_modules) imports must be placed here
import {
	useViewportScroll,
	motion,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import AnimatedNumber from '@/components/AnimatedNumber'
import styles from './Home.module.scss'

const Home = (props) => {
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: false
	});
	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			opacity: 0,
			scale: 1,
			y: 100,
		}
	};
	const container = {
		visible: { opacity: 1 },
		hidden: {
			opacity: 0,
			transition: {
				staggerChildren: 1,
			}
		}
	};
	return (
		<div className={styles.container} id="home">
			<motion.div animate={inView ? 'visible' : 'hidden'}
				variants={container}
				transition={{ duration: 1, ease: 'easeOut' }}
				ref={ref} className={styles.content}>
				<h1>This is Home Page</h1>
				<motion.h1 animate={inView ? 'visible' : 'hidden'}
					variants={variants}
					transition={{ duration: 1, ease: 'easeOut' }}
					ref={ref}>
						<AnimatedNumber />
						</motion.h1>
				<motion.p animate={inView ? 'visible' : 'hidden'}
					variants={variants}
					transition={{ duration: 1, ease: 'easeOut' }}
					ref={ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum modi mollitia molestias tempore debitis veritatis, perspiciatis, blanditiis cupiditate saepe quasi quod?</motion.p>
			</motion.div>
		</div>
	)
};

export default Home;
