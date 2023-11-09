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

import { RestaurantMenu, Restaurants } from '../../pages/Home'

type Props = {
  menu: RestaurantMenu[]
  // restaurante: Restaurants
}

const MenuList = ({ menu /*, restaurante*/ }: Props) => {
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
        {/* <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <Card className="container">
            <img src={modalUrl} alt="" />
            <div>
              <h3>{restaurante.nome}</h3>
              <p>
                {restaurante.descricao} <br />
              </p>
              <span>{restaurante.porcao}</span>
              <ButtonLink to="/" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ {restaurante.preco}
              </ButtonLink>
            </div>
            <CloseButton
              src={close}
              alt=""
              onClick={() => setModalEstaAberto(false)}
            />
          </Card>
          <div className="overlay"></div>
        </Modal> */}
      </ListContainer>
    </>
  )
}

export default MenuList
