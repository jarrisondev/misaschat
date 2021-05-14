export const Button = ({ token }) => {
	let text = token ? 'Ingresar' : 'Registrarse'

	const handler = (e) => {
		// e.preventDefault()
		console.log(e)
	}

	return (
		<button onClick={handler} type='submit'>
			{text}
		</button>
	)
}
