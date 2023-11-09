import estrela from '../../assets/images/estrela.svg'
import { Card, FoodImage, Infos, Name, Rating } from './styles'
import Button from '../Button'
import Tag from '../Tag'

export type Props = {
  name: string
  rating: string
  image: string
  description: string
  infos: string
  caminho: number
  destacado: boolean
}

const ListItem = ({
  name,
  rating,
  image,
  description,
  infos,
  caminho,
  destacado
}: Props) => {
  return (
    <Card>
      <FoodImage src={image} alt={name} />
      <Infos>
        {destacado ? <Tag>Destaque do dia</Tag> : ''}
        <Tag>{infos}</Tag>
      </Infos>
      <div>
        <Name>
          <h2>{name}</h2>
          <Rating>
            <h2>{rating}</h2>
            <img src={estrela} alt="estrela" />
          </Rating>
        </Name>
        <p>{description}</p>
      </div>
      <Button to={`/restaurants/${caminho}`} title="Clique aqui">
        Saiba Mais
      </Button>
    </Card>
  )
}

export default ListItem
