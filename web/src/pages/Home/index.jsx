import React, { useState, useEffect } from "react";
import { Container, Banner } from "./styles";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import bannerImg from '../../assets/bannerImg.png';

import { Slider } from "../../components/Slider";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    api.get('/dishes?user_id=1&title&tag') // Você pode ajustar o usuário conforme necessário
      .then(response => {
        const dishData = response.data;
        setDishes(dishData);
      })
      .catch(error => {
        console.error('Erro ao buscar os pratos:', error);
      });
  }, []);

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

        <Slider title="Pratos em Destaque" dishes={dishes} />
        {/* <Slider title="Pratos em Destaque" dishes={dishes} />
        <Slider title="Pratos em Destaque" dishes={dishes} /> */}

      </main>
      <Footer />
    </Container>
  );
}
