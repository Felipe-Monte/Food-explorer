import { Container } from './styles'

export function TitleLogo({ text }) {
  return (
    <Container>
      <div>
        <img src="" alt="icone hexágono" />
      </div>
      <div>
        <h2>{text}</h2>
      </div>
    </Container>
  )
}