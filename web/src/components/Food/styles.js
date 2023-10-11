import styled from "styled-components";

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
  color: ${({ theme }) => theme.COLORS.WHITE};
  
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


  .card:hover{
  border: 1px solid ${({ theme }) => theme.COLORS.BRAND_600};
}
`


