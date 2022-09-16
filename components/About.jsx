import React from "react";
import S from "../styles/About.module.scss";
import about_icon from "../public/about_icon.svg";
import Image from "next/image";

function About() {
  return (
    <div className={S.about} id="about">
      <div className="container">
        <h2 className="lineTitle">
          <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
            About
          </span>
        </h2>
        <div className={S.content}>
          <div className={S.image}>
            <Image src={about_icon} width="209" />
          </div>
          <div className={S.texts}>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              suspendisse gravida viverra in. Montes, libero dignissim id nec
              est habitant platea.
            </p>
            <p className="text">
              Ante amet, odio velit a dolor at nisl. Viverra nunc, porta
              elementum feugiat nunc. A feugiat dui sem eget amet, quam. Purus
              arcu malesuada sagittis ut. Aliquam viverra aliquam nunc, etiam
              tortor, nunc adipiscing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
