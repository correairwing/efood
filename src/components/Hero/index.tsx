import { HeroImg } from './styles'

import hero from '../../assets/images/hero-massas.png'
import { Restaurants } from '../../pages/Home'

type Props = {
  restaurante: Restaurants
}

const Hero = ({ restaurante }: Props) => (
  <HeroImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div>
      <p>{restaurante.tipo}</p>
      <h1>{restaurante.titulo}</h1>
    </div>
  </HeroImg>
)

export default Hero
