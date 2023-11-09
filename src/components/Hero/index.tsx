import { HeroImg } from './styles'

import { Restaurants } from '../../pages/Home'

export type Props = {
  restaurante: Restaurants
}

const Hero = ({ restaurante }: Props) => {
  return (
    <HeroImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div>
        <p>{restaurante.tipo}</p>
        <h1>{restaurante.titulo}</h1>
      </div>
    </HeroImg>
  )
}

export default Hero
