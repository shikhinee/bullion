//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
//import STORE from '@/store'

import styles from './Carousel.module.scss'

const Carousel = ({ options = { loop: false } }) => {
	const autoplay = useRef(
		Autoplay(
			{ delay: 3000, stopOnInteraction: false },
			(emblaRoot) => emblaRoot.parentElement
		)
	);
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					<div className={styles.emblaSlide}>
						<div className={styles.emblaSlideInner}>
							<div className={styles.emblaSlideImg}>
								<Image layout="fill" src="/mineimage.png" objectFit="cover" alt="mine"></Image>
							</div>
						</div>
					</div>
					<div className={styles.emblaSlide}>
						<div className={styles.emblaSlideInner}>
							<div className={styles.emblaSlideImg}>
								<Image layout="fill" src="/mineimage.png" objectFit="cover" alt="mine"></Image>
							</div>
						</div>
					</div>
					<div className={styles.emblaSlide}>
						<div className={styles.emblaSlideInner}>
							<div className={styles.emblaSlideImg}>
								<Image layout="fill" src="/mineimage.png" objectFit="cover" alt="mine"></Image>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Carousel;
