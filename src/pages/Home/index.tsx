import Header from '../../components/Header'
import List from '../../components/List'
import Restaurante from '../../models/restaurantes'

import sushi from '../../assets/images/sushi.png'
import massas from '../../assets/images/massas.png'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    image: sushi,
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque do dia', 'Japonesa'],
    caminho: '/'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    image: massas,
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    caminho: '/italiana'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    image: massas,
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    caminho: '/italiana'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    image: massas,
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    caminho: '/italiana'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    image: massas,
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    caminho: '/italiana'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    image: massas,
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    caminho: '/italiana'
  }
]

const Home = () => (
  <>
    <Header />
    <List restaurantes={restaurantes} />
  </>
)

export default Home
