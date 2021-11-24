//Next, React (core node_modules) imports must be placed here
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

//import STORE from '@/store'
import ActiveAnchorContext from "@/store/ActiveAnchor";

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Team.module.scss";

const Team = (props) => {
  const { setActiveAnchor } = useContext(ActiveAnchorContext);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveAnchor("#team");
    }
  });

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
