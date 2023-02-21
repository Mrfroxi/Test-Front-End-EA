import React from "react";
import classes from "./mainEntricingBlock.module.css";

const MainEntricingBlock = () => {
  return (
    <section className={classes.mainEntricingBlock}>

      <div className={classes.entricingTextBlock}>
        <p className={classes.entricingText}>
          Check our event page when you wait:
        </p>
      </div>

      <div className={classes.linkMainBtnWrapper}>
        <a href="https://github.com/" className={classes.jumplink}>
          Go to the event
        </a>
      </div>
      
    </section>
  );
};

export default MainEntricingBlock;
