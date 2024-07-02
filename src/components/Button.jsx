import '../styles/Button.css'

export const Button = ({text, OnSubmit}) => {
    return(
        <button onClick={OnSubmit}>
            {text}
        </button>
    )
}