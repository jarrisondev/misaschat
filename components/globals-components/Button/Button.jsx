export const Button = ({renderForm, handler}) => {
	const text = renderForm ? 'Ingresar' : 'Registrarse'

	return (
		<button onClick={(event) => handler(event)} type='submit'>
			{text}
		</button>
	)
}
