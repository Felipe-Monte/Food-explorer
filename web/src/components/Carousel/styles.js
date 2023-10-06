import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  border: 2px solid blue;
    
.carousel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;

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


  .card {
    display: flex;
    flex-direction: column;
    gap: 15px;

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
  
}
 
`