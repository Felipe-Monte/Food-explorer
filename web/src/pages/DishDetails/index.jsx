import { Container, Details, ImgFood, ContainerText, ContainerButton, Tags } from './styles'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { ButtonMore } from '../../components/ButtonMore'
import { Footer } from '../../components/Footer'

import { Link } from 'react-router-dom'

export function DishDetails() {
  return (
    <Container>

      <Header />

      <Link to="/">Voltar</Link>

      <main>

        <Details>
          <ImgFood>
            <img src="src/assets/Mask-group-12.png" alt="Foto do prato" />
          </ImgFood>

          <ContainerText>

            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <Tags>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naam" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </Tags>


            <ContainerButton>
              <ButtonMore />
              <Button title="incluir 25,90" />
            </ContainerButton>

          </ContainerText>


        </Details>

      </main>

      <Footer />

    </Container>
  )
}