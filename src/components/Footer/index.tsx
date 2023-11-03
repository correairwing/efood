import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import { Content, FooterArea, SocialMedia, Text } from './styles'

const Footer = () => (
  <FooterArea>
    <Content>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <SocialMedia>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </SocialMedia>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </Content>
  </FooterArea>
)

export default Footer
