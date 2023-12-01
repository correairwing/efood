import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantItem from './pages/RestaurantItem'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants/:id" element={<RestaurantItem />} />
    </Routes>
  )
}

export default Rotas
