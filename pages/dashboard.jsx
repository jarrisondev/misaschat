import { MainStyled } from 'styles/dashboard'
import { dash } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { Chat } from 'components/Dashboard/Chat/Chat'
import { DashboardContextProvider } from 'context/dashboardContext'
import { CreateChat } from 'components/Dashboard/CreateChat/CreateChat'
import { DashContent } from 'components/Dashboard/DashContent/DashContent'

export default function dashboard () {
  return (
    <DashboardContextProvider>
      <Layout>
        <MainStyled initial='initial' animate='animate' variants={dash}>
          <Chat />
          <DashContent />
          <CreateChat />
        </MainStyled>
      </Layout>
    </DashboardContextProvider>
  )
}
