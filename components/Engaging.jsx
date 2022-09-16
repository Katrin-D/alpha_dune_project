import React from "react";
import Image from "next/image";
import S from "../styles/Engaging.module.scss";
import icon1 from "../public/icon 1.svg";
import icon2 from "../public/icon 2.svg";
import icon3 from "../public/icon 3.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Engaging() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className="container" id="engaging">
      <h2 className="lineTitle">
        START{" "}
        <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
          Engaging
        </span>
      </h2>
      <div className={S.engaging}>
        <div className={S.card} data-scroll data-scroll-speed="1">
          <div className={`${S.card_icon} ${S.heart}`}>
            <Image src={icon1} width="100" height="100" />
          </div>
          <h3>Become Involved</h3>
          <p className="text">
            Check our forums for the latest discussions and engage.
          </p>
          <a href="">FORUMS ></a>
        </div>
        <div className={S.card} data-scroll data-scroll-speed="1">
          <div className={`${S.card_icon} ${S.cone}`}>
            <Image src={icon2} width="100" height="100" />
          </div>
          <h3>Get DUNE Tokens</h3>
          <p className="text">
            Check our forums for the latest discussions and engage.
          </p>
          <a href="">FORUMS ></a>
        </div>
        <div className={S.card} data-scroll data-scroll-speed="1">
          <div className={`${S.card_icon} ${S.check}`}>
            <Image src={icon3} width="100" height="100" />
          </div>
          <h3>Submit Proposals</h3>
          <p className="text">
            Check our forums for the latest discussions and engage.
          </p>
          <a href="">FORUMS ></a>
        </div>
      </div>
    </div>
  );
}

export default Engaging;
