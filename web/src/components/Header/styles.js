import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 104px;

  padding: 24px 123px;

  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 50px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};

  > button {  
      width: 216px;

      /* background-color: transparent; */
      border: none;
    }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Search = styled.div`
  width: 40%;
`