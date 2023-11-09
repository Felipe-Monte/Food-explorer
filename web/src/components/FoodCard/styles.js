import styled from "styled-components"

import { Link } from 'react-router-dom'

// export const ContainerCard = styled.div`
//   border: 1px solid red;

//   display: flex;
//   justify-content: center;
//   gap: 15px;
// `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  width: 304px;
  height: 462px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  position: relative;

 
  > h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }

  > span {
    display: block;
    width: 100%;

    text-align: center;
    font-size: 32px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.BRAND_600};
  }
`

export const Edit = styled(Link)`

> svg {
    width: 30px;
    height: 30px;

    position: absolute;
    top: 15px;
    right: 15px;

  }
`

export const FoodImg = styled.div`
  width: 176px;
  height: 176px;


  > img {
      width: 100%;
      height: 100%;

      background-size: cover;
    }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;
`
