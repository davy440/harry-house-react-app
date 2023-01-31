export const Button = ({text, click}) => {
    return(
    <button
    type='button'
    className='btn btn-primary'
    onClick={() => {
        click()
        return
        }}>
        {text}
    </button>
    )
}