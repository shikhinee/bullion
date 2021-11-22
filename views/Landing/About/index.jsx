//Next, React (core node_modules) imports must be placed here
import Image from 'next/Image'
import { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from './About.module.scss'
const About = (props) => {
	const { scrollY } = useViewportScroll();

	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: false
	});
	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			opacity: 0,
			scale: 1.25,
			y: 50
		}
	};
	return (
		<div className={styles.container} id="about">
			<div className={styles.content}>
				<motion.div className={styles.left}>
					<motion.h1 animate={inView ? 'visible' : 'hidden'}
						variants={variants}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						ref={ref}>This is About Page</motion.h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum modi mollitia molestias tempore debitis veritatis, perspiciatis, blanditiis cupiditate saepe quasi quod?</p>
				</motion.div>
				<motion.div className={styles.right} >
					<motion.div  className={styles.background}>
						<Image className={styles.image} width='500' height='600' src='/mine.jpeg'></Image>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
};

export default About;
