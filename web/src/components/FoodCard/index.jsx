import { Container, FoodImg, ContainerButton, Edit } from './styles'

import { BiHeart, BiEdit } from 'react-icons/bi'

import { ButtonMore } from '../ButtonMore'
import { Button } from '../Button'


export function FoodCard() {

  return (
    <Container to="/details">

      <Edit to="/edit">
        <BiEdit />
      </Edit>

      <FoodImg>
        <img src="src/assets/Mask-group-1.png" alt="imagem do prato" />
      </FoodImg>

      <h1>Prato 1</h1>
      <p>Descrição do prato</p>

      <span>29,99</span>

      <ContainerButton>
        <ButtonMore />
        <Button title="Incluir" />
      </ContainerButton>

    </Container>
  )
}