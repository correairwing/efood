import ListItem from '../ListItem'
import { Content } from './styles'

import Restaurante from '../../models/restaurantes'

type Props = {
  restaurantes: Restaurante[]
}

const List = ({ restaurantes }: Props) => (
  <Content>
    {restaurantes.map((restaurante) => (
      <ListItem
        key={restaurante.id}
        name={restaurante.name}
        rating={restaurante.rating}
        image={restaurante.image}
        description={restaurante.description}
        infos={restaurante.infos}
        caminho={restaurante.caminho}
      />
    ))}
  </Content>
)

export default List
