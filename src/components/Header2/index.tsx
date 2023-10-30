import { HeaderArea } from '../Header/styes'

import hero from '../../assets/images/hero-massas.png'
import vector from '../../assets/images/vector.svg'
import logo from '../../assets/images/logo.svg'
import { Hero, Title } from './styles'

const Header2 = () => (
  <>
    <HeaderArea style={{ backgroundImage: `url(${vector})` }}>
      <div>
        <Title>Restaurantes</Title>
        <img src={logo} alt="Logo" />
        <Title>0 produto(s) no carrinho</Title>
      </div>
    </HeaderArea>
    <Hero style={{ backgroundImage: `url(${hero})` }}>
      <div>
        <p>Italiana</p>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </Hero>
  </>
)

export default Header2
