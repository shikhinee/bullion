//Next, React (core node_modules) imports must be placed here
import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";

import { Telegram, Medium, Twitter } from "@styled-icons/boxicons-logos";

import Logo from '@/components/Logo'
//Styles must be imported here
import styles from "./Footer.module.scss";

const StyledTelegram = styled(Telegram)`
  width: 24px;
  color: #f5f5f5;
  margin-right: 2rem;
  cursor: pointer;
`;
const StyledMedium = styled(Medium)`
  width: 24px;
  color: #f5f5f5;
  margin-right: 2rem;
  cursor: pointer;
`;
const StyledTwitter = styled(Twitter)`
  width: 24px;
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
              <div className={styles.cta}>
                <h2 className={styles.hoverUnderline}>We're happy to work with you</h2>
                <div className={styles.arrow}>
                  <Image src="/arrowlong.svg" width={130} height={50} layout="responsive" />
                </div>
              </div>
              <h3>pr@bullion.codes</h3>              
              <div className={styles.socialContainer}>
                <Link href="">
                  <StyledTelegram />
                </Link>
                <Link href="">
                  <StyledTwitter />
                </Link>
                <Link href="">
                  <StyledMedium />
                </Link>
              </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.contentBottom}>
          <div className={styles.legal}>
            <div className={styles.legalLeft}>
              <p>2021 Bullion Project. - Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <div className={styles.legalRight}>
            &lt;/&gt; Solid Frameworks
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;