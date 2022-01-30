import styled, { css } from 'styled-components';

export const Arrow = styled.div`
  ${() => css`
    position: absolute;
    width: 40px;
    height: 250px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    align-items: center;
    justify-content: center;
    color: white;
    display: flex;
    cursor: pointer;
    opacity: 0;
  `}
  right: ${(props) => (props.right ? 0 : null)};
  left: ${(props) => (props.right ? null : 0)};
`;
