//Next, React (core node_modules) imports must be placed here
import { useState } from "react";

import styled from "styled-components";

//Styles must be imported here
import styles from "./Dashboard.module.scss";

//Components must be imported here
import SideNavigation from "@/components/SideNavigation";
import Navbar from "@/composites/Navbar";
import Footer from "@/composites/Footer";
import Panel from "@/composites/Panel";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Panel/>
      <div className={styles.content}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
