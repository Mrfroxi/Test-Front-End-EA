import React, { useEffect, useState } from "react";
import { ReactComponent as NameOfSVG } from "../../ui/svg/LogoTestEx.svg";
import classes from "./svgLogo.module.css";

const SvgLogo = () => {
  const [width, setWidth] = useState(1900);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    resizeObserver.observe(document.body);

    return () => {
      if (document.body) {
        resizeObserver.unobserve(document.body);
      } else {
        resizeObserver.disconnect();
      }
    };
  }, [setWidth]);

  return (
    <div className={classes.mainLogo}>
      <a href="./">
        {width < 360 ? (
          <NameOfSVG width="130px" height="40px" alt="Logo" />
        ) : (
          <NameOfSVG alt="Logo" />
        )}
      </a>
    </div>
  );
};

export default SvgLogo;
