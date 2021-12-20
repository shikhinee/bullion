//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const Team = (props) => {
  const { activeAnchor, setActiveAnchor, isClicked } =
    useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isClicked && activeAnchor !== "#team") {
      // animation.start("hidden");
      return;
    }

    if (isClicked) {
      // animation.start("visible");
    } else if (inView) {
      // animation.start("visible");
      setActiveAnchor("#team");
    } else {
      // animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.container} id="team" ref={ref}>
					<div className={styles.heading}>
					<h3>Why BULLION</h3>
					<span>|</span>
					<div className={styles.blogo}>
					<Image src="/blogo.png" width={40} height={40} layout="responsive"></Image>
					</div>
					</div>
    </div>
  );
};

export default Team;
