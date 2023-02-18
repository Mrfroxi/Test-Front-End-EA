import React from 'react'
import classes from './timerNumber.module.css'

const TimerNumber =  ({num}) => {
  
 return (
   <div className={classes.number}>
     {num}
   </div>
 );
};

export default TimerNumber;