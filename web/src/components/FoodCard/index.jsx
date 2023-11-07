import React, { useEffect, useState } from 'react';
import { Container, FoodImg, ContainerButton, Edit } from './styles';
import { BiHeart, BiEdit } from 'react-icons/bi';
import { ButtonMore } from '../ButtonMore';
import { Button } from '../Button';
import { api } from '../../services/api';

export function FoodCard() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Realize a chamada à API para obter a lista de pratos
    api.get('/dishes?user_id=1&title&tag')
      .then(response => {
        const dishData = response.data;
        setDishes(dishData);

        // Exibe os dados no console
        console.log('Dados dos pratos:', dishData);
      })
      .catch(error => {
        console.error('Erro ao buscar os pratos:', error);
      });
  }, []);
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