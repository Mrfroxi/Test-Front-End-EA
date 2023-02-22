import React from "react";
import { useValidation } from "./use.Validation";

export const useInput = (InitialValue,validations) => {

    const [value ,setValue] = React.useState(InitialValue);
    const [isDirty,setDirty] = React.useState(false);

    const valid = useValidation(value,validations);

    const clearValue = () => {
      setValue('')
    }

    const clearDirtyType = () =>{
      setDirty(false)
    }
  
    const makeDirty = () => {
      setDirty(true)
    }
  
    const onChange = (e) => {
      setValue(e.target.value)
    }
  
  
    const onBlur = (e) =>{
      setDirty(true)
    }
  
  
    return {
      value,
      onChange,
      onBlur,
      isDirty,
      makeDirty,
      clearValue,
      clearDirtyType,
      ...valid,
    }
  }
  