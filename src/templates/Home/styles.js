import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    padding-top: 100px;
  `}
`;

export const Loading = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.arial};
  `}
`;
