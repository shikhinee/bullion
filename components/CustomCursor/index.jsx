//Next, React (core node_modules) imports must be placed here
import { Fragment, useEffect } from "react";
//import STORE from '@/store'

import styles from './CustomCursor.module.scss'

export const customCursor = () => {
	var myCursor = document.querySelectorAll(".mouse-cursor"),
		hamburger = document.querySelector(".hamburger"),
		kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
		pointer = document.querySelector(".cursor-pointer"),
		e = document.querySelector(".cursor-inner"),
		t = document.querySelector(".cursor-outer");

	function mouseEvent(element) {
		element.addEventListener("mouseenter", function () {
			e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
		});
		element.addEventListener("mouseleave", function () {
			e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
		});
	}
	if (myCursor.length) {
		if (document.body) {
			let n,
				i = 0,
				o = !1;
			(window.onmousemove = function (s) {
				// console.log(document.querySelector(this));
				o ||
					(t.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(e.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(n = s.clientY),
					(i = s.clientX);
			}),
				document.body.addEventListener(
					"mouseenter",
					// "a,.kura_tm_topbar .trigger, .cursor-pointer",
					function () {
						let a = document.querySelectorAll("a");
						e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

						for (let i = 0; i < a.length; i++) {
							const element = a[i];
							mouseEvent(element);
						}

						hamburger && mouseEvent(hamburger);
						kura_tm_topbar && mouseEvent(kura_tm_topbar);
						pointer && mouseEvent(pointer);
					}
				),
				(e.style.visibility = "visible"),
				(t.style.visibility = "visible");
		}
	}
};
const CustomCursor = (props) => {
	useEffect(() => {
		customCursor();
	});
	return (
		<Fragment>
			<div className="mouse-cursor cursor-outer"></div>
			<div className="mouse-cursor cursor-inner"></div>
		</Fragment>
	)
};

export default CustomCursor;