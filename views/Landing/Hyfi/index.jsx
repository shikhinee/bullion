//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import Link from "next/link";
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Hyfi.module.scss";

const Hyfi = (props) => {
  return (
    <div className={styles.container}>
      <Link href="bullion_ecosystem_flow_chart.pdf">
        <div className={styles.cta}>
          <h2 className={styles.hoverUnderline}>HyFi Ecosystem</h2>
          <div className={styles.arrow}>
            <Image
              src="/arrowlong.svg"
              width={130}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hyfi;
