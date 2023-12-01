import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  Sidebar
} from './styles'

import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
            <button />
          </div>
        </CartItem>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
            <button type="button" />
          </div>
        </CartItem>
        <PriceContainer>
          <span>Valor total:</span>
          <span>R$ 182,90</span>
        </PriceContainer>
        <Button title="Clique para continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
