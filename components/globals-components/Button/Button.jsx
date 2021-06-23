export const Button = ({ renderForm, handler = null }) => {
  const text = renderForm ? 'Ingresar' : 'Registrarse'

  return (
    <button onClick={(event) => handler ? handler(event) : ' '} type='submit'>
      {text}
    </button>
  )
}
