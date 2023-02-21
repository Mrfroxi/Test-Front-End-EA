import axios from 'axios'

export const sendData = async (e,email) => {
    e.preventDefault()
    const {value ,makeDirty,minLengthErrorTrow } = email

    if(value){
        const response =  await axios.post(`http://localhost:3000/auth`,{
            value
        })
        console.log(response.data.message)
    }else{
        makeDirty()
        minLengthErrorTrow()
    }
}