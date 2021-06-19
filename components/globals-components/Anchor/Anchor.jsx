export const Anchor = ({ handler, renderForm }) => {
  const text = renderForm ? 'Registrarse' : 'Iniciar Sesión'

  return <p onClick={() => handler(!renderForm)}>{text}</p>
}
