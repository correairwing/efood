import { Link } from 'react-router-dom'
import { HeaderArea } from '../Header/styes'
import { Title } from './styles'

import vector from '../../assets/images/vector.svg'
import logo from '../../assets/images/logo.svg'

const Header2 = () => (
  <>
    <HeaderArea style={{ backgroundImage: `url(${vector})` }}>
      <div>
        <Title>Restaurantes</Title>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Title>0 produto(s) no carrinho</Title>
      </div>
    </HeaderArea>
  </>
)

export default Header2
