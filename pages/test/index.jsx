//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import LandingLayout from "@/layouts/Landing";
import styles from "./Test.module.scss";

const TestPage = (props) => {
  return <main className={styles.container}>Test</main>;
};

TestPage.Layout = LandingLayout;

export default TestPage;
