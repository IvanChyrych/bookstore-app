import './styles.scss'
import { Layout } from './components/layout'
import { Title } from './components/title'
import { Card } from './components/card'



export function App() {

  return (
    <Layout>
      <Title>New releases</Title>
      <Card title='book title' text='dsfvsd' price='213' rating='32' image='.\src\assets\book-placeholder.png'/>
    </Layout>
  )
}

