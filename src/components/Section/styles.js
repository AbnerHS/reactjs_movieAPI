import styled, { css } from 'styled-components';
import { Arrow } from '../Arrow/styles';

export const Section = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    overflow: hidden;
  `}
`;

export const SectionMovies = styled.div`
  ${({ marginLeft }) => css`
    width: 5000px;
    display: flex;
    overflow: hidden;
    transition: all 0.5s;
    margin-left: ${marginLeft}px;
  `}
  &:hover {
    ${Arrow} {
      opacity: 1;
      transition: all 0.3s;
    }
  }
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
  `}
`;
