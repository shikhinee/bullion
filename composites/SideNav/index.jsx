//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import ActiveAnchorContext from "@/store/ActiveAnchor";
import styled from "styled-components";
import { Telegram, Medium, Twitter } from "@styled-icons/boxicons-logos";

import MenuIcon from "@/components/MenuIcon";

import styles from "./SideNav.module.scss";

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

const SideNav = ({ menuIsOpen, menuHandler, ...props }) => {
  const { route } = useRouter();
  const { activeAnchor } = useContext(ActiveAnchorContext);
  return (
    <aside className={styles.container}>
      <div className={styles.buttonContainer}>
        <MenuIcon
          isOpen={menuIsOpen}
          handler={() => {
            menuHandler(!menuIsOpen);
          }}
        />
      </div>
      <ul className={styles.content}>
        <li>
          <Link href="/#home">
            <a
              className={
                activeAnchor == "#home" && route == "/" ? styles.isActive : ""
              }
              onClick={props.onClick}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#why">
            <a
              className={
                activeAnchor == "#why" && route == "/" ? styles.isActive : ""
              }
              onClick={props.onClick}
            >
              Bullion
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#features">
            <a
              className={
                activeAnchor == "#features" && route == "/"
                  ? styles.isActive
                  : ""
              }
              onClick={props.onClick}
            >
              Features
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#team">
            <a
              className={
                activeAnchor == "#team" && route == "/" ? styles.isActive : ""
              }
              onClick={props.onClick}
            >
              Team
            </a>
          </Link>
        </li>
        <li>
          <Link href="/whitepaper">
            <a
              className={
                route == "/whitepaper"
                  ? `${styles.isActive} ${styles.ctaItem}`
                  : styles.ctaItem
              }
              onClick={props.onClick}
            >
              Whitepaper
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.socialLinks}>
        <div>
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
        <span className={styles.email}>pr@bullion.codes</span>
      </div>
    </aside>
  );
};

export default SideNav;
