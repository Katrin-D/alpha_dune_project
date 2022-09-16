import React from "react";
import Image from "next/image";
import S from "../styles/Footer.module.scss";
import Logo from "../public/logo.svg";
import twitterLogo from "../public/twitterLogo.svg";
import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Footer() {
  const { scroll } = useLocomotiveScroll();

  const goToSecondPart = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#second-part");
  };

  const goToTop = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo(0, { duration: 1000, disableLerp: true });
  };
  return (
    <div className="container">
      <div className={S.footer} id="footer">
        <a className={S.logo} href="#header" onClick={goToTop}>
          <Image src={Logo} width="243" height="31" />
        </a>

        <div className={S.twitterLink}>
          <a href="">Follow us on Twitter ></a>
          <Link href="">
            <a className={S.twitterLogo}>
              <svg
                width="30"
                height="25"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 22.3186C3.24254 22.4569 6.16071 21.6384 8.89241 19.5863C6.07595 19.2548 4.14557 17.9103 3.10692 15.1804C4.01221 15.1804 4.80448 15.1804 5.59675 15.1804C5.61483 15.1301 5.63291 15.0786 5.65212 15.0283C2.73395 14.0623 1.14263 12.0674 0.884946 8.93385C1.80267 9.19221 2.63562 9.42772 3.46858 9.66207C3.50588 9.62206 3.54204 9.58205 3.57934 9.54204C0.941456 7.22932 0.259946 4.50619 1.76876 1.1783C5.20118 5.1944 9.42021 7.39966 14.5897 7.77006C14.5897 6.9961 14.5174 6.27359 14.6033 5.57052C14.9073 3.07832 16.2658 1.33149 18.5613 0.451216C20.8567 -0.429057 23.0165 -0.0106418 24.8915 1.61272C25.2566 1.92825 25.5685 2.03685 25.998 1.86994C26.875 1.52926 27.7532 1.19545 28.6302 0.85477C28.7975 0.789607 28.9568 0.705009 29.236 0.575826C28.759 2.01513 27.9069 3.01087 26.797 3.81569C26.8241 3.87171 26.8513 3.92772 26.8784 3.9826C27.8911 3.70937 28.9037 3.43729 30 3.14234C29.2812 4.22153 28.4595 5.1018 27.5034 5.84146C27.1485 6.11583 27.0264 6.39363 27.0332 6.84063C27.1485 14.5733 22.1191 21.8259 14.9955 24.0757C9.87003 25.6945 4.92089 25.2029 0.232821 22.4752C0.150316 22.4295 0.0768535 22.3712 0 22.3186Z"
                  fill="#9D51FF"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
