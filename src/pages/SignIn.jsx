import {Form} from '../components/Form.jsx'

export const SignIn = () => {

    const fields = [
        {name: 'email', label: 'email', type: 'email', placeholder: 'xxxx@xxxxx.com'},
        {name: 'pass', label: 'senha', type: 'pass', placeholder: 'xxxx2005@#'}
    ]

    const links = [
        {href: '/signup', text: 'criar conta'},
        {href: '/home', text: 'quero suporte'}
    ]

    return(
        <Form
            title={'entrar na conta.'}
            fields={fields}
            submitUrl={'http://localhost:8080/signin'}
            navigateTo={'/home'}
            links={links}
        />
    );

};