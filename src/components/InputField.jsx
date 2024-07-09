import React, { useState } from 'react';
import '../styles/InputField.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ícones do react-icons

export const InputField = ({ label, type, placeholder, onChange }) => {
    const [inputType, setInputType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'password' : 'text');
    };

    return (
        <div className="input-label">
            <label className='label'>
                {label}
                <input
                    className='label_input'
                    type={inputType}
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                />
                {type === 'password' && (
                    <button
                        type='button'
                        className='eye'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </label>
        </div>
    );
};
