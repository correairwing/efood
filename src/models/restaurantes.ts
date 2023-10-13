class Restaurante {
  name: string
  rating: string
  image: string
  description: string
  infos: string[]
  caminho: string
  id: number

  constructor(
    name: string,
    rating: string,
    image: string,
    description: string,
    infos: string[],
    id: number,
    caminho: string
  ) {
    this.name = name
    this.rating = rating
    this.image = image
    this.description = description
    this.infos = infos
    this.id = id
    this.caminho = caminho
  }
}

export default Restaurante
