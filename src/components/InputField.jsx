import '../styles/InputField.css';

export const InputField = ({label, type, placeholder, onChange}) => {
    return (
        <label className='label'>
            {label}
            <input className='label_input'
            type={type} 
            placeholder={placeholder} 
            onChange={e => onChange(e.target.value)}
            />
        </label>

    )
}