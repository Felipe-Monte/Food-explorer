import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 500px;

  /* border: 1px solid blue; */
`
export const ContainerImg = styled.div`
  width: 400px;
  height: 390px;
/* 
  border: 1px solid red; */

  > img {
    width: 100%;
    height: 100%;

    background-size: cover;
  }
`
export const ContainerText = styled.div`
  width: 50%;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:20px;


  padding: 20px;

  /* border: 1px solid yellow; */
  
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
  }

  .container-buttons {
    display: flex;

    padding: 10px;

    /* border: 1px solid green; */

  }
`