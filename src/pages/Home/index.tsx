import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export interface RestaurantMenu extends Restaurants {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  capa: string
  tipo: string
  avaliacao: string
  descricao: string
  cardapio: RestaurantMenu[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantList restaurantes={restaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
