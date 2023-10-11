import { Container } from './styles'

import { Button } from '../Button'
import { ButtonMore } from '../ButtonMore'

export function Food() {
  return (
    <Container >

      <div className='container-img'>
        <img src="src/assets/Mask-group-2.png" alt="foto prato" />
      </div>

      <h2>Nome do prato</h2>
      <p>Prato descrição</p>
      <span>29,99</span>
      <div className='container-button'>
        <ButtonMore />
        <Button title="Incluir" to="/product" />
      </div>

    </Container>
  )
}
