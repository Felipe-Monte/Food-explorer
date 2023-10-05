import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Container, Banner } from "./styles";

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import { USER_ROLE } from '../../utils/sales'
import { useAuth } from '../../hooks/auth';

import bannerImg from '../../assets/bannerImg.png'
import cardImg from '../../assets/Mask group-1.png'

export function Home() {
  const { user } = useAuth()

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

        <div className='carousel'>
          <Card
            urlImg={cardImg}
          />
          <Card
            urlImg={cardImg}
          />
          <Card
            urlImg={cardImg}
          />
          <Card
            urlImg={cardImg}
          />
        </div>



      </main>
    </Container>
  )
}