import { useState } from 'react'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import '../styles/Signup.css'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        confirmPass: ''
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

        try{
            axios({
                method: 'post',
                url: 'http://localhost:8080/signup',
                data: formData
            })
            .then(response => 
                setMessage({ 
                statusCode: response.status,  
                message: response.data.message
            }))
        }catch(err){
            console.log('erro: ' + err);
        }

    }

    return (

        <form action="" className='form'>
            <h1>criar conta.</h1>
            <p>faça a diferença.</p>

            {/* nome completo */}
            <InputField onChange={value => HandleChange('name', value)} label='nome completo' type='text' placeholder='Elon Musk da Silva'/>
            {/* email */}
            <InputField onChange={value => HandleChange('email', value)} label='email' type='email' placeholder='xxxx@xxxxx.com'/>
            {/* senha */}
            <InputField onChange={value => HandleChange('pass', value)} label='senha' type='password' placeholder='xxxx2024@#'/>
            {/* confimar senha */}
            <InputField onChange={value => HandleChange('confirmPass', value)} label='confirmar senha' type='password' placeholder='xxxx2024@#'/>

            <Button text='enviar' OnSubmit={HandleSubmit}/>

            
            <span className='message'>
                {
                    (message.message === '' ? null : (
                        <p>
                            {message.message}  <FontAwesomeIcon icon={<faCoffee/>}/> 
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
