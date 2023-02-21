import React from 'react'
import classes from './mainFrameTitle.module.css'

const MainFrameTitle =  ({text ,secondClassName}) => {

 return (
   <>
    <h1 className={classes.mainTitle + (secondClassName ? ` ${secondClassName}` : '')}  >{text}</h1>
   </>
 );
};

export default MainFrameTitle;