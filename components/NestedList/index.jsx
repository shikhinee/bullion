//Next, React (core node_modules) imports must be placed here
import { useState } from "react";

import { motion } from "framer-motion";

//Styles must be imported here
import styles from "./NestedList.module.scss";

const NestedList = ({ children, head, icon, variants, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} noselect`}>
      <li onClick={handleOpen} className={styles.head}>
        {icon}
        <motion.span variants={variants}>{head}</motion.span>
      </li>
      <motion.ul
        initial={{
          height: 0,
        }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.ul>
    </div>
  );
};

export default NestedList;
