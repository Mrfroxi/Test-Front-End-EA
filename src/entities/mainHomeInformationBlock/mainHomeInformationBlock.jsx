import React from "react";
import classes from "./mainHomeInformationBlock.module.css";

const MainHomeInformation = () => {
  return (
    <section className={classes.mainHomeInformation}>
      <h1 className={classes.mainTitle}>Under Construction</h1>
      <div className={classes.mainHomeText}>
        <p mainTitleDescription>
          We're making lots of improvements and will be
          <br />
          back soon
        </p>
      </div>
    </section>
  );
};

export default MainHomeInformation;
