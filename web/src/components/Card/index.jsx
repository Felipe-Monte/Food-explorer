import { Container } from './styles'

import { Button } from '../Button'

export function Card({ urlImg }) {
  return (
    <Container>
      <div className='container-img'>
        <img src={urlImg} alt="foto do prato" />
      </div>

      <h2>Spaguetti Gambe</h2>
      <p>Massa fresca com camarões e pesto</p>
      <span>R$ 79,97</span>

      <div className='container-button'>
        <Button title="Incluir"/>
        <Button title="Incluir"/>
      </div>
    </Container>
  )
}