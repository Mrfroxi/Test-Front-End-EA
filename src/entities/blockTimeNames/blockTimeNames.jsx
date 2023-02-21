import React from 'react'
import TimeDescription from '../../shared/ui/timeDescription/timeDescription';
import TimerNumber from '../../shared/ui/timerNumber/timerNumber';
import classes from './blockTimeNames.module.css' 

const BlockTimeNames =  ({num,type}) => {

 return (
   <div className={classes.blockTimeNames}>
      <TimerNumber  num={num}/>
      <TimeDescription type={type}/>
   </div>
 );
};

export default BlockTimeNames;