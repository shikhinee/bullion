import LandingLayout from "@/layouts/Landing";
import Home from "@/views/Landing/Home";
import About from "@/views/Landing/About";
import Features from "@/views/Landing/Features";
import Team from "@/views/Landing/Team";
import Contact from "@/views/Landing/Contact";
import styles from "./Root.module.scss";

const RootPage = (props) => {
  return (
    <main className={styles.container}>
      <Home/>
      <About/>
      <Features/>
      <Team/>
      <Contact/>
    </main>
  );
};
RootPage.Layout=LandingLayout

export default RootPage;
