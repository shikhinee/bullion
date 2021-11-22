//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './MenuIcon.module.scss'

const MenuIcon = (props) => {
	return (
	  <button
		className={
		  props.isOpen ? `${styles.container} ${styles.isOpen}` : `${styles.container}`
		}
		onClick={props.handler}
	  >
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	  </button>
	);
  };
  
  export default MenuIcon;
  