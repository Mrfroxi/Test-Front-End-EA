import React from 'react'
import SeparatingColons from '../../shared/ui/separatingColons/separatingColons';
import classes from './elemCounterTimer.module.css'
import BlockTimeNames from '../blockTimeNames/blockTimeNames';


const ElemCounterTimer =  (props) => {

  const {type} = props
  
 return (
   <div className={classes.elem}>
        <BlockTimeNames {...props}/>

        {
          type === 'seconds' ? null :   <SeparatingColons /> 
        }

   </div>
 );
};

export default ElemCounterTimer;