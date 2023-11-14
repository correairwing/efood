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
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [modalNome, setModalNome] = useState('')
  const [modalDescricao, setModalDescricao] = useState('')
  const [modalPorcao, setModalPorcao] = useState('')
  const [modalPreco, setModalPreco] = useState('')
  return (
    <>
      <ListContainer>
        {menu.map((media) => (
          <ListCard
            key={media.nome}
            onClick={() => {
              setModalEstaAberto(true)
              setModalUrl(media.foto)
              setModalNome(media.nome)
              setModalDescricao(media.descricao)
              setModalPorcao(media.porcao)
              setModalPreco(media.preco)
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
            <img src={modalUrl} alt={modalNome} />
            <div>
              <h3>{modalNome}</h3>
              <p>
                {modalDescricao} <br />
              </p>
              <span>{modalPorcao}</span>
              <ButtonLink to="/" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ {modalPreco}
              </ButtonLink>
            </div>
            <CloseButton
              src={close}
              alt=""
              onClick={() => setModalEstaAberto(false)}
            />
          </Card>
          <div
            className="overlay"
            onClick={() => setModalEstaAberto(false)}
          ></div>
        </Modal>
      </ListContainer>
    </>
  )
}

export default MenuList
