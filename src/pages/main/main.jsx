import React from "react";
import CountDown from "../../entities/counters/countDown/countDown";
import classes from "./main.module.css";

import SvgLogo from "../../shared/components/svgLogo/svgLogo";
import MainHomeInformation from "../../entities/mainHomeInformationBlock/mainHomeInformationBlock";
import MainEntricingBlock from "../../entities/mainEntricingBlock/mainEntricingBlock";

const Main = () => {

  return (
      <main className={classes.main}>
        <section className={classes.mainContainer}>
          <section className={classes.mainInformBlock}>
            <SvgLogo />

            <MainHomeInformation />

            <CountDown />

            <MainEntricingBlock />
          </section>
        </section>
      </main>

     

  );
};

export default Main;