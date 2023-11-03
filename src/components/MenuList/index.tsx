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

import pizza from '../../assets/images/pizza.png'
import pizza2 from '../../assets/images/pizza2.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

type MenuItem = {
  img: string
  fullImg: string
  name: string
  description: string
}

const mock: MenuItem[] = [
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  },
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  },
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  },
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  },
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  },
  {
    img: pizza,
    fullImg: pizza2,
    name: 'pizza',
    description: 'teste'
  }
]

const MenuList = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  return (
    <>
      <ListContainer>
        {mock.map((media) => (
          <ListCard
            key={media.img}
            onClick={() => {
              setModalEstaAberto(true)
              setModalUrl(media.fullImg)
            }}
          >
            <img src={media.img} alt="" />
            <Title>{media.name}</Title>
            <Description>{media.description}</Description>
            <CardButton>Adicionar ao carrinho</CardButton>
          </ListCard>
        ))}
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <Card className="container">
            <img src={modalUrl} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br />
              </p>
              <span>Serve: de 2 a 3 pessoas</span>
              <ButtonLink to="/" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ 60,90
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
