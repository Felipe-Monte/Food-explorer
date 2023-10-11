import { Container, ContainerImg, ContainerText } from './styles'

import { ButtonMore } from '../ButtonMore'
import { Button } from '../Button'

export function DishDetails({ imgUrl, title, description }) {
  return (
    <Container>
      <ContainerImg>
        <img src={imgUrl} alt="imagem do prato" />
      </ContainerImg>

      <ContainerText>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className='container-buttons'>
          <ButtonMore />
          <Button title="Incluir R$: 25,00" />
        </div>
      </ContainerText>
    </Container>
  )
}