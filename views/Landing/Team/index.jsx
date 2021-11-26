//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const Team = (props) => {
  const { setActiveAnchor, isClicked } = useContext(ActiveAnchorContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isClicked && activeAnchor !== "#team") {
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
      <div className={styles.content}>
        <h1>This is Team Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloremque nostrum non vitae repellat ipsum voluptas explicabo laborum
          modi mollitia molestias tempore debitis veritatis, perspiciatis,
          blanditiis cupiditate saepe quasi quod?
        </p>
      </div>
    </div>
  );
};

export default Team;
