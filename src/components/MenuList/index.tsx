import React, { useState } from 'react'
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
  const [modalIndex, setModalIndex] = useState<number | null>(null) // Alteração no tipo

  const dispatch = useDispatch()

  const addToCart = (item: RestaurantMenu) => {
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <div>
      <ListContainer>
        {menu.map((media, index) => (
          <React.Fragment key={media.nome}>
            <ListCard
              onClick={() => {
                setModalIndex(index)
              }}
            >
              <img src={media.foto} alt="" />
              <Title>{media.nome}</Title>
              <Description>{media.descricao}</Description>
              <CardButton>Mais informações</CardButton>
            </ListCard>
            <Modal className={modalIndex === index ? 'visivel' : ''}>
              <Card className="container">
                <img src={media.foto} alt={media.nome} />
                <div>
                  <h3>{media.nome}</h3>
                  <p>{media.descricao}</p>
                  <span>{media.porcao}</span>
                  <ButtonLink
                    to=""
                    title="clique para adicionar a carrinho"
                    onClick={() => addToCart(media)}
                  >
                    Adicionar ao carrinho - R$ {media.preco + '0'}
                  </ButtonLink>
                </div>
                <CloseButton
                  src={close}
                  alt="fechar"
                  onClick={() => setModalIndex(null)}
                />
              </Card>
              <div
                className="overlay"
                onClick={() => setModalIndex(null)}
              ></div>
            </Modal>
          </React.Fragment>
        ))}
      </ListContainer>
    </div>
  )
}

export default MenuList
