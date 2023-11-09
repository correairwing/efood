import { Restaurants } from '../../pages/Home'
import ListItem from '../ListItem'
import { Content } from './styles'

type Props = {
  restaurantes: Restaurants[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Content>
      {restaurantes.map((restaurante) => (
        <ListItem
          key={restaurante.id}
          name={restaurante.titulo}
          rating={restaurante.avaliacao}
          image={restaurante.capa}
          description={restaurante.descricao}
          infos={restaurante.tipo}
          caminho={restaurante.id}
          destacado={restaurante.destacado}
        />
      ))}
    </Content>
  )
}

export default RestaurantList
