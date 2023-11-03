import { HeroImg } from './styles'

import hero from '../../assets/images/hero-massas.png'

const Hero = () => (
  <HeroImg style={{ backgroundImage: `url(${hero})` }}>
    <div>
      <p>Italiana</p>
      <h1>La Dolce Vita Trattoria</h1>
    </div>
  </HeroImg>
)

export default Hero
