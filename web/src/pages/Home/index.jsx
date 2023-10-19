import { Container, Banner } from "./styles";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'

import { Slider } from '../../components/Slider'

import bannerImg from '../../assets/bannerImg.png'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Banner>

          <div className='container-img'>
            <img src={bannerImg} alt="banner imagem" />
          </div>
          <div className='container-text'>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Slider title="Refeições" />
        <Slider title="Sobremesas" />
        <Slider title="Bebidas" />
 
      </main>

      <Footer />

    </Container>
  )
}