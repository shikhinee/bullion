//Next, React (core node_modules) imports must be placed here
import Link from 'next/link'

import styled from "styled-components";

import { FacebookSquare, Dribbble, Twitter } from "@styled-icons/boxicons-logos";

import Logo from '@/components/Logo'
//Styles must be imported here
import styles from "./Footer.module.scss";

const StyledFacebook = styled(FacebookSquare)`
  width: 24px;
  color: #d4a600;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
  }
`;
const StyledDribbble = styled(Dribbble)`
  width: 24px;
  color: #d4a600;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const StyledTwitter = styled(Twitter)`
  width: 24px;
  color: #d4a600;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const Footer = (props) => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div className={styles.contentLeft}>
            <div>
              <Logo />
              <p><span>Улаанбаатар хот, Сүхбаатар дүүрэг</span><span> Example<br />(+976) 7011 1111</span></p>
              <div className={styles.socialContainer}>
                <Link href="https://www.facebook.com/SolidFrameworksLLC">
                  <StyledFacebook />
                </Link>
                <Link href="https://www.instagram.com/solidframeworks/">
                  <StyledDribbble />
                </Link>
                <Link href="https://www.youtube.com/channel/UC3M2XBEJv5UfRHDRzjWAsTQ">
                  <StyledTwitter />
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.web}>
                <h2>Title 1</h2>
                <p>Example 1</p>
                <p>Example 2</p>
                <p>Example 3</p>
                <p>Example 4</p>
              </div>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.design}>
              <h2>Title 2</h2>
              <p>Example 1</p>
              <p>Example 2</p>
              <p>Example 3</p>
              <p>Example 4</p>
            </div>
            <div className={styles.strategy}>
              <h2>Title 3</h2>
                <p>Example 1</p>
                <p>Example 2</p>
                <p>Example 3</p>
                <p>Example 4</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.contentBottom}>
          <div className={styles.legal}>
            <div className={styles.legalLeft}>
              <p>Solid Frameworks ©  All rights reserved.</p>
            </div>
            <div className={styles.legalRight}>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;