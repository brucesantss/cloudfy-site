import '../styles/Signup.css'
import { Form } from '../components/Form.jsx'

export const Signup = () => {

    const fields = [
        { name: 'name', label: 'nome', type: 'text', placeholder: 'Elon Musk da Silva' },
        { name: 'email', label: 'email', type: 'email', placeholder: 'xxxx@xxxxx.com' },
        { name: 'pass', label: 'senha', type: 'password', placeholder: 'xxxx2024@#' },
        { name: 'confirmPass', label: 'confirmar senha', type: 'password', placeholder: 'xxxx2024@#' }
    ]

    const links = [
        {href: '/signin', text: 'já tenho conta'},
        {href: '/home', text: 'esqueci a senha'}
    ]

    return (
            <Form
                title={'criar conta.'}
                fields={fields}
                submitUrl={'http://localhost:8080/signup'}
                navigateTo={'/signin'}
                links={links}
            />
)}
