import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  > main {
    width: 100%;
    height: fit-content;

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    padding: 164px 124px 50px 124px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  gap: 50%;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  
  .container-img {
    position: relative;
  
    /* width: 48%; */
    height: 100%;
   
    > img {
      position: absolute;
      bottom: 0;
    }
  }

  .container-text{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      font-size: 46px;
    }

    > p {
      font-size: 16px;
    }
  }
`