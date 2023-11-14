import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurants } from '../Home'

import Header2 from '../../components/Header2'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'

const RestaurantItem = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())

      .then((res) => setRestaurante(res))
  }, [id])

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
