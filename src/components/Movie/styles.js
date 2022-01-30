import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    transition: all ease 0.1s;
    transform: scale(0.9);
    cursor: pointer;
  `}
  &:hover {
    transform: scale(1);
  }
`;

export const Image = styled.img`
  ${() => css`
    height: 250px;
  `}
`;
