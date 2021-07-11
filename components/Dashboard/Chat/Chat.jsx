import { Layout } from 'components/Layout/Layout'

export const Chat = ({ contact, user, setRenderChat }) => {
  const goBack = () => {
    setRenderChat(false)
  }
  return (
    <Layout>
      <button onClick={goBack}>Volver</button>
      <h1>Hello, params</h1>
    </Layout>
  )
}
