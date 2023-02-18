import React from 'react'
import classes from './timeDescription.module.css'
import { toUpFirstLetter } from '../../function/toUpFirstLetter';
const TimeDescription =  ({type}) => {
 
 return (
   <div className={classes.blockTimeDescription}>

        <p className={classes.textTimeDescription}>{toUpFirstLetter(type)}</p>

   </div>
 );
};

export default TimeDescription;