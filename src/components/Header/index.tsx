import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/vector.svg'

import { Content, HeaderArea, Title } from './styes'

const Header = () => (
  <>
    <HeaderArea style={{ backgroundImage: `url(${vector})` }}>
      <Content>
        <img src={logo} alt="Logo" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Content>
    </HeaderArea>
  </>
)

export default Header
