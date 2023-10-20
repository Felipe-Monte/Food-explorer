import { Container, FoodImg, ContainerButton } from './styles'

import { BiHeart } from 'react-icons/bi'

import { ButtonMore } from '../ButtonMore'
import { Button } from '../Button'

export function FoodCard() {
  return (
    <Container>
      <BiHeart />

      <FoodImg>
        <img src="src/assets/Mask-group-1.png" alt="imagem do prato" />
      </FoodImg>

      <h1>Prato 1</h1>
      <p>Descrição do prato</p>

      <span>29,99</span>

      <ContainerButton>
        <ButtonMore />
        <Button title="botão 1" />
      </ContainerButton>

    </Container>
  )
}