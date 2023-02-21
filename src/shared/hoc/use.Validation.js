import React from "react";

export const useValidation = (value,validations) => {
  
    const [isEmpty , setEmpty] = React.useState(true);
    const [minLengthError ,setMinLengthError] = React.useState(false);
    const [isEmailError , setEmailError] = React.useState(true);
    const [isInputValid, setisInputValid] = React.useState(false);
  
    const minLengthErrorTrow = () => {
      setMinLengthError(true)
    }
  
    React.useEffect(() => {
      for(const validation in validations){
        switch(validation){
          case 'isEmpty' :
            value  ? setEmpty(false) : setEmpty(true);
            break;
          case 'minLength' :
            value.length  < validations[validation] ? setMinLengthError(true) : setMinLengthError(false); 
            break;
          case 'isEmail' :
            const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            regex.test(String(value).toLocaleLowerCase()) ? setEmailError(false) :setEmailError(true);
            break;
        }
      }
    },[value])
  
    React.useEffect(()=> {
      if(isEmpty||minLengthError||isEmailError){
        setisInputValid(false)
      }else{
        setisInputValid(true)
      }
    },[isEmpty,minLengthError,isEmailError])
    return{
      isEmpty,
      minLengthError,
      isEmailError,
      isInputValid,
      minLengthErrorTrow
    }
  } 