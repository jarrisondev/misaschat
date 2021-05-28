export const Anchor = ({ handler, renderForm }) => {
	let text = renderForm ? 'Registrarse' : 'Iniciar Sesión'

	return <p onClick={() => handler(!renderForm)}>{text}</p>
}
