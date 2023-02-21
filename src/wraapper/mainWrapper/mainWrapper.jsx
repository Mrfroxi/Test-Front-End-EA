import React, { useRef } from "react";
import Events from "../../pages/events/events";
import Footer from "../../pages/footer/footer";
import Main from "../../pages/main/main";
import classes from "./mainWrapper.module.css";


const Wrapper = ({ setModal }) => {

  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.pageWrapper}>

      <Main />

      <Events />

      <span className={classes.buildingAnimationBlock} ref={ref}></span>

      <Footer onClick={handleClick} setModal={setModal} />

    </div>
  );
};

export default Wrapper;
