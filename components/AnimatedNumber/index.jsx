//Next, React (core node_modules) imports must be placed here
import { useState } from 'react';
import CountUp from 'react-countup';

//import STORE from '@/store'

import styles from './AnimatedNumber.module.scss'

const AnimatedNumber = (props) => {
	const [loading, setLoading] = useState(false);
	const onStart = () => {setLoading(true)};
	const onEnd = () => {setLoading(false)};
	const containerProps = {
	  'aria-busy': loading
	};
	 return (
	<CountUp className={styles.count} end={123456} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} />
	)
};

export default AnimatedNumber;
