import { useState } from 'react';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import '../styles/Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Form = ({ title, fields, submitUrl, navigateTo, links }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {})
    );

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
            url: submitUrl,
            data: formData
        })
        .then(response => {
            setMessage({ 
                statusCode: response.status,  
                message: response.data.message
            });
        
            if(response.status === 200){
                navigate(navigateTo);
            }
        })
        .catch(err => {
            setMessage({
                statusCode: err.response.status,
                message: err.response.status === 404 ? 'essa conta não existe. criar conta?' : err.response.data.message
            });
            console.log('erro' + err);
        });
    }

    return (
        <form className='form' onSubmit={HandleSubmit}>
            <h1>{title}</h1>
            <p>faça a diferença.</p>

            {fields.map(field => (
                <InputField
                    key={field.name}
                    onChange={value => HandleChange(field.name, value)}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                />
            ))}

            <Button text='enviar' OnSubmit={HandleSubmit}/>

            <span className='message'>
                {message.message !== '' && (
                    <p>
                        {message.message === 'essa conta não existe. criar conta?' ? (
                            <span>essa conta não existe. <Link to="/signup">criar conta?</Link></span>        
                        ) : (
                            message.message
                        )}
                    </p>
                )}
            </span>

            <div className="support">
                {links.map((link, index) => (
                    <span key={index}><a href={link.href}>{link.text}</a></span>
                ))}
            </div>
        </form>
    );
};
