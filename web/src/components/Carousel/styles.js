import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 64px 0px;

  border: 5px solid green;
  position: relative;


  > h3 {
    display: block;

    position: absolute;
    top: 10px;
    left: 30px;

    font-size: 28px;
  }

  .container-carousel{
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    overflow-x: auto;
    scroll-behavior: smooth;

    border: 2px solid orange;
  }

  .button-left{
    /* position: absolute;
    left: 0; */

    height: 80px;
    width: 80px;

    background-color: blue;
  }

  .button-right{
    /* position: absolute;
    right: 0; */

    height: 80px;
    width: 80px;

    background-color: blue;
  }
    
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;


  width: 304px;
  height: 462px;

  padding: 24px;

  border: 1px solid red;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  .container-img {
    > img {
      width: 176px;
      height: 176px;
    }
  }

  > h2 {
    font-size: 24px;
  }

  > p {
    font-size: 14px;
  }

  > span {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BRAND_600};
}


  .container-button {
    display: flex;
    gap: 5px;
  }
  }
  
`