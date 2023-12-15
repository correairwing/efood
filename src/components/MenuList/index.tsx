import { useState } from 'react'
import {
  ButtonLink,
  Card,
  CardButton,
  CloseButton,
  Description,
  ListCard,
  ListContainer,
  Modal,
  Title
} from './styles'

import close from '../../assets/images/close.png'
import { RestaurantMenu } from '../../pages/Home'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  menu: RestaurantMenu[]
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    menu.forEach((item) => {
      dispatch(add(item))
    })
    dispatch(open())
  }

  return (
    <div>
      <ListContainer>
        {menu.map((media) => (
          <>
            <ListCard
              key={media.nome}
              onClick={() => {
                setModalEstaAberto(true)
              }}
            >
              <img src={media.foto} alt="" />
              <Title>{media.nome}</Title>
              <Description>{media.descricao}</Description>
              <CardButton>Mais informações</CardButton>
            </ListCard>
            <Modal className={modalEstaAberto ? 'visivel' : ''}>
              <Card className="container">
                <img src={media.foto} alt={media.nome} />
                <div>
                  <h3>{media.nome}</h3>
                  <p>
                    {media.descricao} <br />
                  </p>
                  <span>{media.porcao}</span>
                  <ButtonLink
                    to=""
                    title="clique para adicionar ao carrinho"
                    onClick={addToCart}
                  >
                    Adicionar ao carrinho - R$ {media.preco + '0'}
                  </ButtonLink>
                </div>
                <CloseButton
                  src={close}
                  alt="fechar"
                  onClick={() => setModalEstaAberto(false)}
                />
              </Card>
              <div
                className="overlay"
                onClick={() => setModalEstaAberto(false)}
              ></div>
            </Modal>
          </>
        ))}
      </ListContainer>
    </div>
  )
}

export default MenuList
