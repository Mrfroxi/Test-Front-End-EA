import axios from 'axios'

export const sendData = async (e,email,setModal) => {

    e.preventDefault()
    const {value ,makeDirty,minLengthErrorTrow ,setValue ,setDirty} = email


    if(value){

        setValue('')
        setDirty(false)

        const response =  await axios.post(`http://localhost:3000/auth`,{
            value
        },

        // there should be then but I don't have an endpoint to which to send a request
        // there should be then but I don't have an endpoint to which to send a request

        console.log('there should be response but I dont have an endpoint to which to send a request ,so hello 404'),
        console.log('there should be response but I dont have an endpoint to which to send a request ,so hello 404'),
        console.log('there should be response but I dont have an endpoint to which to send a request ,so hello 404'),

        setModal(true)   

        )

        console.log(response.data.message)

    }else{

        makeDirty()
        minLengthErrorTrow()
        
    }
}