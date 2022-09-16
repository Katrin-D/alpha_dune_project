import React from "react";
import PropTypes from "prop-types";
import S from "../styles/Button.module.scss";
import Link from "next/link";

function Button({ text, href, isGlow, isWhite }) {
  return (
    <div className={S.glow_button}>
      {isGlow ? <div className={S.glow} /> : null}
      <Link href={href}>
        <a className={isWhite ? `${S.white_button}` : `${S.button}`}>{text}</a>
      </Link>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  isGlow: PropTypes.bool,
  isWhite: PropTypes.bool,
};

Button.defaultProps = {
  text: "Learn More",
  href: "/",
  isGlow: true,
  isWhite: false,
};

export default Button;
