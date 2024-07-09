import { useState } from 'react'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import '../styles/Signup.css'
import axios from 'axios'

export const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        pass: '',
    });

    const [message, setMessage] = useState({
        statusCode: 0,
        message: ''
    });

    function HandleChange(field, value){
        setFormData({
            ...formData,
            [field]: value
        })
    }

    function HandleSubmit(e){
        e.preventDefault();

            axios({
                method: 'post',
                url: 'http://localhost:8080/signin',
                data: formData
            })
            .then(response => 
                setMessage({ 
                statusCode: response.status,  
                message: response.data.message
            })).catch(err => {
                setMessage({
                    statusCode: err.response.status,
                    message: err.response.data.message
                })
                console.log('erro' + err);
            })

    }

    return (

        <form className='form'>
            <h1>entrar na conta.</h1>
            <p>faça a diferença.</p>

            
            {/* email */}
            <InputField onChange={value => HandleChange('email', value)} label='email' type='email' placeholder='xxxx@xxxxx.com'/>
            {/* senha */}
            <InputField onChange={value => HandleChange('pass', value)} label='senha' type='password' placeholder='xxxx2024@#'/>

            <Button text='enviar' OnSubmit={HandleSubmit}/>

            
            <span className='message'>
                {
                    (message.message === '' ? null : (
                        <p>
                            {message.message} 
                        </p>
                    ))
                }
            </span>

            <div className="support">
                <span><a href="/home">já tenho conta</a></span>
                <span><a href="/home">quero suporte</a></span>
            </div>

        </form>

    )
}