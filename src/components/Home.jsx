import { useState } from "react"
import axios from "axios";

export const Home = () => {

    const [message, setMessage] = useState('...');

    function HandleClick(){
        //retornando mensagem da api
        try{
            axios({
                method: "get",
                url: "http://localhost:8080/home",
              }).then(response => setMessage(response.data.message));

        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <h1>Mensagem do servidor.</h1>
            <p>mensagem: {message}</p>

            <button onClick={HandleClick}>enviar</button>
            
        </>
    )
}