import React, { useEffect, useRef, useState } from "react";
import ElemCounterTimer from "../../elemCounterTimer/elemCounterTimer";
import classes from "./countDown.module.css";

const CountDown = () => {
  let [seconds, setSecond] = useState("00");
  let [minets, setMinet] = useState("00");
  let [hours, setHour] = useState("00");
  let [days, setDay] = useState("00");

  // eslint-disable-next-line no-unused-vars
  let interval = useRef();

  const startTimer = () => {

    const countDownDate = new Date("May 31 2023 00:00:00").getTime();

    interval = setInterval(() => {

      const timeNow = new Date().getTime();
      const distance = countDownDate - timeNow;

      const notUtcDays = Math.floor(distance / (1000 * 60 * 60 * 24));

      const notUtcHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const notUtcMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      const notUtcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance >= 0) {
        setSecond(notUtcSeconds);
        setMinet(notUtcMinutes);
        setHour(notUtcHours);
        setDay(notUtcDays);
      }
      
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section className={classes.countDownBlock}>
      <div className={classes.countDown}>
        <ElemCounterTimer num={days} type={"days"} />
        <ElemCounterTimer num={hours} type={"hours"} />
        <ElemCounterTimer num={minets} type={"minets"} />
        <ElemCounterTimer num={seconds} type={"seconds"} />
      </div>
    </section>
  );
};

export default CountDown;
