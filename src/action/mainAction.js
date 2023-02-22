import axios from 'axios'

export const sendData = async (e,email,setModla) => {

    e.preventDefault()
    const {value ,makeDirty,minLengthErrorTrow ,clearValue,clearDirtyType} = email
    if(value){
        const response =  await axios.post(`http://localhost:3000/auth`,{
            value
        },
    // there should be then but I don't have an endpoint to which to send a request
     // there should be then but I don't have an endpoint to which to send a request
        console.log('there should be response but I dont have an endpoint to which to send a request '),
        console.log('there should be response but I dont have an endpoint to which to send a request '),
        console.log('there should be response but I dont have an endpoint to which to send a request '),
        clearDirtyType(),
        clearValue(),
        setModla(true)   
        )
        console.log(response.data.message)
    }else{
        makeDirty()
        minLengthErrorTrow()
    }
}