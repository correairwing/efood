import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export type Restaurants = {
  caminho: string
  id: number
  titulo: string
  destacado: string
  capa: string
  tipo: string
  avaliacao: string
  descricao: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurants} />
    </>
  )
}

export default Home
