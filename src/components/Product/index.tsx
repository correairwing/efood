import { Card, CardButton, Description, Title } from './styles'

import pizza from '../../assets/images/pizza.png'

const Product = () => (
  <Card>
    <img src={pizza} alt="" />
    <Title>Pizza Marguerita</Title>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <CardButton>Adicionar ao carrinho</CardButton>
  </Card>
)

export default Product
