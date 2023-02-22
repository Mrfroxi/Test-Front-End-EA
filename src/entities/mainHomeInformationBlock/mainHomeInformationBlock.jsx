import React from "react";
import MainFrameTitle from "../../shared/titles/mainFrameTitle";
import classes from "./mainHomeInformationBlock.module.css";

const MainHomeInformation = () => {
  return (
    <section className={classes.mainHomeInformation}>
      <MainFrameTitle text='Under Construction'/>
      <div className={classes.mainHomeText}>
        <p mainTitleDescription>
          We're making lots of improvements and will be
          back soon lore
        </p>
      </div>
    </section>
  );
};

export default MainHomeInformation;
