import styled, { css } from 'styled-components';

export const Nav = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    z-index: 20;
    background: ${({ top }) => (top ? theme.colors.darkGrey : theme.colors.black)};
    box-shadow: ${({ top }) => (top ? 'none' : 'black 2px 2px 4px')};
    transition: all 0.2s;
  `}
`;

export const NavContainer = styled.div`
  ${() => css`
    width: 95%;
    display: flex;
    justify-content: space-between;
  `}
`;

export const Logo = styled.h2`
  ${({ theme }) => css`
    color: rgb(255, 0, 0);
    font-weight: bold;
    font-family: ${theme.fonts.arial};
    cursor: pointer;
  `}
`;
