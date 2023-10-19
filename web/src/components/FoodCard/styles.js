import styled from "styled-components"

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

  > svg {
    width: 25px;
    height: 25px;

    position: absolute;
    top: 15px;
    right: 15px;
  }

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
