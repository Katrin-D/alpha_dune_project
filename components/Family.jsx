import React from "react";
import Image from "next/image";
import S from "../styles/Family.module.scss";
import Button from "./Button.jsx";
import animation from "../public/familyAnimation.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Family() {
  const { scroll } = useLocomotiveScroll();

  return (
    <div className="container" id="family">
      <h2 className="lineTitle">
        ONE{" "}
        <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
          Family
        </span>
      </h2>
      <div className={S.family}>
        <div className={S.animation}>
          <Image src={animation} width="615" />
        </div>
        <div className={S.family_content}>
          <h3
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal"
          >
            Join Discord Today
          </h3>
          <div>
            <p className="text">
              Alpha Dune brings together one community for the entire ecosystem.
              Start engaging and stay in touch with us on Discord.
            </p>
            <div className={S.button}>
              <Button text="Join Discord" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family;
