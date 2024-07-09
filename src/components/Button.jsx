import '../styles/Button.css'

export const Button = ({text, OnSubmit}) => {
    return(
        <button className='button-form' onClick={OnSubmit}>
            {text}
        </button>
    )
}