//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";

import ActiveAnchorContext from "@/store/ActiveAnchor";
//import STORE from '@/store'

import styles from './MobileMenu.module.scss'

const MobileMenu = (props) => {
	const { route } = useRouter();
	const { activeAnchor } = useContext(ActiveAnchorContext);
	return (

		<div className={styles.dropdown}>
			<div className={styles.dropdown_inner}>
				<ul className={styles.container}>
					<li>
						<Link href="/testfield">
							<a
								className={route == "/testfield" ? styles.isActive : ""}
								onClick={props.onClick}
							>
								Test
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#about">
							<a
								className={
									activeAnchor == "#about" && route == "/" ? styles.isActive : ""
								}
								onClick={props.onClick}
							>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#features">
							<a
								className={
									activeAnchor == "#features" && route == "/" ? styles.isActive : ""
								}
								onClick={props.onClick}
							>
								Features
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#team">
							<a
								className={
									activeAnchor == "#team" && route == "/" ? styles.isActive : ""
								}
								onClick={props.onClick}
							>
								Team
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#contact">
							<a
								className={
									activeAnchor == "#contact" && route == "/" ? styles.isActive : ""
								}
								onClick={props.onClick}
							>
								Contact
							</a>
						</Link>
					</li>
					<li>
						<Link href="/whitepaper">
							<a
								className={route == "/whitepaper" ? styles.isActive : ""}
								onClick={props.onClick}
							>
								Whitepaper
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>

	);
};
export default MobileMenu;
