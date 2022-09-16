import React from "react";
import Image from "next/image";
import S from "../styles/Ecosystem.module.scss";
import stater from "../public/stater.svg";
import houndrace from "../public/houndrace.svg";
import Button from "./Button.jsx";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Ecosystem() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={S.ecosystem} id="ecosystem">
      <div data-scroll data-scroll-speed="2" className={S.background} />
      <div className="container">
        <h2 className="lineTitle">
          Alpha dune{" "}
          <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
            ecosystem
          </span>
        </h2>
        <div className={S.ecosystem_content}>
          <div className={S.stater}>
            <div className={S.animation}>
              <Image src={stater} width="455" height="449" />
            </div>
            <div className={S.stater_content} data-scroll data-scroll-speed="1">
              <h3 className={S.title}>Stater</h3>
              <p className="text">
                Stater is a lending platform for NFT assets. Borrow by using
                your NFT asset as collateral.
              </p>
              <Button text="Learn More" />
            </div>
          </div>
          <div className={S.houndrace}>
            <div className={S.animation}>
              <Image src={houndrace} width="487" height="516" />
            </div>
            <div
              className={S.houndrace_content}
              data-scroll
              data-scroll-speed="1"
            >
              <h3 className={S.title}>Houndrace</h3>
              <p className="text">
                Stater is a P2E PVP Hound racing game where players compete in
                different races in order to win.
              </p>
              <Button text="Learn More" href="#engaging" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
