import React from "react";
import { ReactComponent as NameOfSVG } from "../../ui/svg/LogoTestEx.svg";
import classes from './svgLogo.module.css'

const SvgLogo = () => {
  return (
    <div className={classes.mainLogo}>
      <NameOfSVG alt="Logo" />
    </div>
  );
};

export default SvgLogo;
