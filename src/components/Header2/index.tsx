import { Link } from 'react-router-dom'
import { HeaderArea } from '../Header/styes'
import { Title } from './styles'

import vector from '../../assets/images/vector.svg'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header2 = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderArea style={{ backgroundImage: `url(${vector})` }}>
        <div>
          <Title>Restaurantes</Title>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Title onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Title>
        </div>
      </HeaderArea>
    </>
  )
}

export default Header2
