import { useParams } from 'react-router-dom'

import Header2 from '../../components/Header2'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'

const RestaurantItem = () => {
  const { id } = useParams()

  return (
    <>
      <Header2 />
      <Hero />
      <MenuList />
    </>
  )
}

export default RestaurantItem
