import { useParams } from 'react-router-dom'

import Header2 from '../../components/Header2'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'
import { useGetMenuQuery } from '../../services/api'

const RestaurantItem = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetMenuQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header2 />
      <Hero restaurante={restaurante} />
      <MenuList menu={restaurante.cardapio} />
    </>
  )
}

export default RestaurantItem
