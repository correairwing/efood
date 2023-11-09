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

import { RestaurantMenu } from '../../pages/Home'

type Props = {
  menu: RestaurantMenu[]
  modalItem: RestaurantMenu
}

const MenuList = ({ menu, modalItem }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  return (
    <>
      <ListContainer>
        {menu.map((media) => (
          <ListCard
            key={media.nome}
            onClick={() => {
              setModalEstaAberto(true)
              setModalUrl(media.foto)
            }}
          >
            <img src={media.foto} alt="" />
            <Title>{media.nome}</Title>
            <Description>{media.descricao}</Description>
            <CardButton>Adicionar ao carrinho</CardButton>
          </ListCard>
        ))}
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <Card className="container">
            <img src={modalUrl} alt="" />
            <div>
              <h3>{modalItem.nome}</h3>
              <p>
                {modalItem.descricao} <br />
              </p>
              <span>{modalItem.porcao}</span>
              <ButtonLink to="/" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ {modalItem.preco}
              </ButtonLink>
            </div>
            <CloseButton
              src={close}
              alt=""
              onClick={() => setModalEstaAberto(false)}
            />
          </Card>
          <div className="overlay"></div>
        </Modal>
      </ListContainer>
    </>
  )
}

export default MenuList
