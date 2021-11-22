//Next, React (core node_modules) imports must be placed here
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

import styles from './Contact.module.scss'

const Contact = (props) => {
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
		<div className={styles.container} id="contact">
			<div className={styles.content}>
				<motion.h1 animate={inView ? 'visible' : 'hidden'}
						variants={variants}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						ref={ref}>This is Contact Page</motion.h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum modi mollitia molestias tempore debitis veritatis, perspiciatis, blanditiis cupiditate saepe quasi quod?</p>
			</div>
		</div>
	)
};

export default Contact;
