import { useState } from 'react'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import '../styles/Signup.css'
import axios from 'axios'

export const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        confirmPass: ''
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
            .then(response => console.log(response))
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

            <div className="support">
                <span><a href="">já tenho conta</a></span>
                <span><a href="">quero suporte</a></span>
            </div>

        </form>

    )
}