import styled, { css } from 'styled-components';

export const MovieTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
