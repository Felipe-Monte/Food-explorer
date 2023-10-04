import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 300px;

  text-align: center;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  padding: 64px;
  border-radius: 7px;

  min-width: 476px;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  > a {
    font-size: 16px;
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  > label {
    text-align: left;
  }
`;
