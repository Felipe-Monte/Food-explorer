import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 304px;
  height: 462px;

  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_400};

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
    color: ${({theme}) => theme.COLORS.BRAND_600};
  }

  .container-button {
    display: flex;
    gap: 5px;
  }
`