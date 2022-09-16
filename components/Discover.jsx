import React from "react";
import Image from "next/image";
import S from "../styles/Discover.module.scss";
import animation from "../public/discoverAnimation.svg";
import Button from "./Button.jsx";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Discover() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={S.discover} id="discover">
      <div className="container">
        <div className={S.wrapper}>
          <div className={S.animation}>
            <Image src={animation} width="436" />
          </div>
          <div className={S.discoverContent}>
            <div data-scroll data-scroll-speed="2">
              <h2>DISCOVER Alpha Dune</h2>
              <p className="text">
                Alpha Dune is the governance and community hub for our
                ecosystem.
              </p>
              <Button text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
