export const Button = ({ token, handler }) => {
	let text = token ? 'Ingresar' : 'Registrarse'

	return (
		<button onClick={(event) => handler(event)} type='submit'>
			{text}
		</button>
	)
}
