import React from 'react'
import classes from './errorInputText.module.css'

const ErrorText =  ({text}) => {
 return (
   <div className={classes.errorText}>
     <p>
        {text}
     </p>
   </div>
 );
};

export default ErrorText;