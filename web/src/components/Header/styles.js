import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.nav`
  width: 100%;
  height: 104px;

  padding: 24px 123px;

  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  
  > button {  
      width: 216px;

      /* background-color: transparent; */
      border: none;
    }

    .add_button {  
      width: 50px;
      font-size: 20px;
      /* background-color: transparent; */
      border: none;
    }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    padding: 0;
    gap: 0;
    
    > button {  
      display: none;
    }

    .add_button {  
      display: none;
    }

    svg {
      display: none;
    }
      
    }
`;

export const Search = styled.div`
  width: 40%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`