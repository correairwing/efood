import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <List />
      <Footer />
    </>
  )
}

export default App
