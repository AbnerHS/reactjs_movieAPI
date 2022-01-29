import styled, { css } from 'styled-components';

export const Section = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
  `}
`;

export const SectionMovies = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    overflow-x: hidden;
  `}
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
  `}
`;
