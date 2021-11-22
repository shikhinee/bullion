//Next, React (core node_modules) imports must be placed here
import Link from 'next/link'

import styled from "styled-components";

import { FacebookSquare, Dribbble, Twitter } from "@styled-icons/boxicons-logos";

import Logo from '@/components/Logo'
//Styles must be imported here
import styles from "./Footer.module.scss";

const StyledFacebook = styled(FacebookSquare)`
  width: 24px;
  color: #138EEA;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
  }
`;
const StyledDribbble = styled(Dribbble)`
  width: 24px;
  color: #138EEA;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const StyledTwitter = styled(Twitter)`
  width: 24px;
  color: #138EEA;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div className={styles.contentLeft}>
            <div>
              <Logo/>
              <p><span>Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо,</span><span>Чингисийн өргөн чөлөө-4 <br/>(+976) 7011 2396</span></p>
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
                <h2>Мэдээлэл</h2>
                <Link href="https://nationallibrary.mn/category/vision-mission-values/"><p>Уншигчын санал</p></Link>
                <Link href="https://nationallibrary.mn/blog-chess-2-columns/"><p>Номын санал</p></Link>
                <Link href="https://nationallibrary.mn/our-benefits/"><p>Статик мэдээлэл</p></Link>
                <Link href="https://nationallibrary.mn/our-benefits/"><p>Виртуал лавлагааны алба</p></Link>
                <Link href="https://nationallibrary.mn/our-features/"><p>Номын сан</p></Link>
                <Link href="https://nationallibrary.mn/our-services/"><p>Мэргэжилтнүүдэд</p></Link>
                <Link href="https://nationallibrary.mn/%d1%85%d1%83%d1%83%d0%bb%d1%8c-%d1%8d%d1%80%d1%85-%d0%b7%d2%af%d0%b9/"><p>Хууль эрх зүй</p></Link>
                <Link href="https://nationallibrary.mn/%d1%82%d3%a9%d1%81%d3%a9%d0%bb-%d1%85%d3%a9%d1%82%d3%a9%d0%bb%d0%b1%d3%a9%d1%80/"><p>Төсөл, Хөтөлбөр</p></Link>
                <Link href="https://nationallibrary.mn/%d0%bc%d0%be%d0%bd%d0%b3%d0%be%d0%bb-%d0%b1%d0%b0%d1%85%d0%b0%d1%80%d1%85%d0%b0%d0%bb/"><p>Монгол бахархал</p></Link>     
              </div>
            </div>
          </div>
        <div className={styles.contentRight}>
            <div className={styles.design}>
	        		<h2>Биднийг дэмжих</h2>
              <Link href="https://nationallibrary.mn/tanhimuud/"><p>Танхимууд</p></Link>
              <Link href="https://nationallibrary.mn/our-benefits/"><p>Номын сангийн давуу талууд</p></Link>
              <Link href="https://nationallibrary.mn/our-features/"><p>Үйлчилгээнүүд</p></Link>
              <Link href="https://nationallibrary.mn/our-services/"><p>Байршил</p></Link>
              <Link href="https://nationallibrary.mn/locations/"><p>Хандив</p></Link>
              <Link href="https://nationallibrary.mn/%d0%bd%d0%be%d0%bc/"><p>Ном</p></Link>     
            </div>
            <div className={styles.strategy}>
		        	<h2>Номын санд</h2>
              <Link href="https://nationallibrary.mn/our-services/"><p>Хүртээмжтэй байдал</p></Link>   
              <Link href="https://nationallibrary.mn/our-services/"><p>Хөгжлийн бэрхшээлтэй иргэдэд<br/>зориулсан үйлчилгээ</p></Link>
            </div>
        </div>
      </div>
      <hr></hr>
        <div className={styles.contentBottom}>
          <div className={styles.legal}>
            <div className={styles.legalLeft}>
              <p>МУҮНС ©  All rights reserved.</p>
            </div>
            <div className={styles.legalRight}>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;