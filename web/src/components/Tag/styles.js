import styled from 'styled-components'

export const Container = styled.span`
  width: fit-content;
  padding: 5px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
`