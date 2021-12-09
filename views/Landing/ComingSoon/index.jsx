//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import CanvasLanding from "@/components/CanvasLanding";

import styles from './ComingSoon.module.scss'

const ComingSoon = (props) => {
	const { activeAnchor, setActiveAnchor, isClicked } =
		useContext(ActiveAnchorContext);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.6,
		triggerOnce: false,
	});

	const animation = useAnimation();

	useEffect(() => {
		if (isClicked && activeAnchor !== "#home") {
			animation.start("hidden");
			return;
		}

		if (isClicked) {
			animation.start("visible");
		} else if (inView) {
			animation.start("visible");
			setActiveAnchor("#home");
		} else {
			animation.start("hidden");
		}
	}, [inView]);

	const variants = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		hidden: {
			opacity: 0,
			scale: 1,
		},
	};
	return (
		<div className={styles.container} id="home" ref={ref}>
			<CanvasLanding />
			<motion.div
				initial="hidden"
				animate={animation}
				variants={variants}
				ref={ref}
				className={styles.content}
			>
				<h1><span>Own,</span><span>Trade,</span></h1>
				<h1><span>Collaterize,</span><span>and</span></h1>
				<h1>Redeem <span className={styles.gold}>Gold</span></h1>
				<p className={styles.gold}>
					Coming Soon...
				</p>
			</motion.div>
		</div>
	)
};

export default ComingSoon;
