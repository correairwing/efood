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
}

const ListItem = ({
  name,
  rating,
  image,
  description,
  infos,
  caminho
}: Props) => (
  <Card>
    <FoodImage src={image} alt={name} />
    <Infos>
      {}
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

export default ListItem
