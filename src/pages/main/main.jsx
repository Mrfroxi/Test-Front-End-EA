import React, { useEffect, useState } from "react";
import CountDown from "../../entities/counters/countDown/countDown";
import classes from "./main.module.css";
import SvgLogo from "../../shared/components/svgLogo/svgLogo";
import MainHomeInformation from "../../entities/mainHomeInformationBlock/mainHomeInformationBlock";
import MainEntricingBlock from "../../entities/mainEntricingBlock/mainEntricingBlock";
import { CSSTransition } from "react-transition-group";
import "./action.css";

const Main = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);

  return (
    <main className={classes.main}>
      <section className={classes.mainContainer}>
        <section className={classes.mainInformBlock}>

          <CSSTransition
            in={showMessage}
            timeout={1000}
            classNames="logo"
            unmountOnExit
          >
            <SvgLogo />
          </CSSTransition>

          <CSSTransition
            in={showMessage}
            timeout={1000}
            classNames="mainHomeInformation"
            unmountOnExit
          >
            <MainHomeInformation />
          </CSSTransition>

        

          <CSSTransition
            in={showMessage}
            timeout={1000}
            classNames="lastBlockAction"
            unmountOnExit
          >
            <CountDown />
          </CSSTransition>

          <CSSTransition
            in={showMessage}
            timeout={1000}
            classNames="lastBlockAction"
            unmountOnExit
          >
            <MainEntricingBlock />
          </CSSTransition>


    <div className={classes.firstVectorBlock}>
      <img src="../main/VectorFirst.svg" alt="vector"></img>
    </div>

        </section>
      </section>
    </main>
  );
};

export default Main;