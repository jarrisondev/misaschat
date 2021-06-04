export const Button = ({ renderForm, handler }) => {
	let text = renderForm ? 'Ingresar' : 'Registrarse'

	return (
		<button onClick={(event) => handler(event)} type='submit'>
			{text}
		</button>
	)
}
