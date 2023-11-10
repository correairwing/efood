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

type Props = {
  menu: RestaurantMenu[]
  modal: RestaurantMenu
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const MenuList = ({ menu, descricao, nome, porcao, preco }: Props) => {
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
            <img src={modalUrl} alt={nome} />
            <div>
              <h3>{nome}</h3>
              <p>
                {descricao} <br />
              </p>
              <span>{porcao}</span>
              <ButtonLink to="/" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ {preco}
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
