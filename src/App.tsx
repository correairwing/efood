import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Italiana from './pages/Italiana'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/italiana',
    element: <Italiana />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
