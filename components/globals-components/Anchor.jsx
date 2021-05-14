export const Anchor = ({ handler, token }) => {
	let text = token ? 'Registrarse' : 'Iniciar Sesión'

	return <p onClick={() => handler(!token)}>{text}</p>
}
