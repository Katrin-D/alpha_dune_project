import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import minLogo from "../public/minLogo.svg";
import S from "../styles/Header.module.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Header() {
  const [open, setOpen] = useState(false);
  const { scroll } = useLocomotiveScroll();

  return (
    <div className={S.header} id="header">
      <div className="container">
        <div className={S.wrapper}>
          <a className={S.header_logo} href="/">
            <Image src={Logo} width="243" height="31" />
          </a>
          <a className={S.header_minLogo} href="/">
            <Image src={minLogo} width="33" height="23" />
          </a>
          <nav className={open ? `${S.nav}` : `${S.nav_visible}`}>
            <ul className={S.nav_list}>
              <a className={S.nav_link} href="/about">
                <li>about</li>
              </a>
              <a className={S.nav_link} href="/team">
                <li>team</li>
              </a>
              <a className={S.nav_link} href="/docs">
                <li>docs</li>
              </a>
              <a className={S.nav_link} href="">
                <li>farms</li>
              </a>
              <a className={S.nav_link} href="">
                <li>news</li>
              </a>
            </ul>
          </nav>
          <button
            className={!open ? `${S.burger}` : `${S.burger} ${S.burger_open}`}
            aria-label="Открыть меню"
            aria-expanded="false"
            open={open}
            onClick={() => setOpen(!open)}
          >
            <div className={S.burger_line} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
