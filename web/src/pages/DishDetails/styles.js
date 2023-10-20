import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > a {
    display: block;

    width: fit-content;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;

    margin: 20px 0px 0px 120px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > main {
    width: 100%;
    height: calc(100% - 232px);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 122px;

    /* border: 2px solid white; */
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  width: 100%;
  height: fit-content;

  /* border: 2px solid blue; */

`

export const ImgFood = styled.div`
  width: 390px;
  height: 390px;

  > img {
    width: 100%;
    height: 100%;
    
  }
`

export const ContainerText = styled.div`
  max-width: 48%;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;

  /* border: 2px solid orange; */
  
  > h2 {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
  }

  > p {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
`

export const ContainerButton = styled.div`
  display: flex;
   
  margin-top: 45px;

  width: 50%;
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`