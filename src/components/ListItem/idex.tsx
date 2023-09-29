import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.svg'
import { Card, FoodImage, Name, Rating } from './styles'

const ListItem = () => (
  <Card>
    <FoodImage src={sushi} alt="Sushi" />
    <div>
      <Name>
        <h2>Hioki Sushi</h2>
        <Rating>
          <h2>4.9</h2>
          <img src={estrela} alt="estrela" />
        </Rating>
      </Name>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>
    </div>
  </Card>
)

export default ListItem
