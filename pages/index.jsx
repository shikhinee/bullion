import ThemeToggler from "@/components/ThemeToggler";
import LandingLayout from "@/layouts/Landing";
import CustomCursor from "@/components/CustomCursor";
import styles from "./Root.module.scss";

const RootPage = (props) => {
  return (
    <main className={styles.container}>
    </main>
  );
};
RootPage.Layout=LandingLayout

export default RootPage;
