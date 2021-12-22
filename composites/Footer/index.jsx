//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Telegram, Medium, Twitter } from "@styled-icons/boxicons-logos";

import Logo from "@/components/Logo";
//Styles must be imported here
import styles from "./Footer.module.scss";

const StyledTelegram = styled(Telegram)`
  width: 3.6rem;
  color: #f5f5f5;
  margin-right: 2rem;
  cursor: pointer;
`;
const StyledMedium = styled(Medium)`
  width: 3.6rem;
  color: #f5f5f5;
  margin-right: 2rem;
  cursor: pointer;
`;
const StyledTwitter = styled(Twitter)`
  width: 3.6rem;
  color: #f5f5f5;
  margin-right: 2rem;
  cursor: pointer;
`;
const Footer = (props) => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div>
            <Link href="https://t.me/bullionofficial">
              <div className={styles.cta}>
                <h2 className={styles.hoverUnderline}>Join us</h2>
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
            <div className={styles.socialContainer}>
              <Link href="https://t.me/bullionofficial ">
                <StyledTelegram />
              </Link>
              <Link href="https://twitter.com/bullioncodes ">
                <StyledTwitter />
              </Link>
              <Link href="https://medium.com/@bullionofficial ">
                <StyledMedium />
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.contentBottom}>
          <div className={styles.legal}>
            <div className={styles.legalLeft}>
              <p>2021 Bullion Project</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
