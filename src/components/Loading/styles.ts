import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{transform:translateZ(0) rotateX(0)}100%{transform:translateZ(160px) rotateX(-180deg)}
`;

export const Container = styled.div`
  position: fixed;
  background: var(--dark, #333333);
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 220px;
    height: 220px;
    animation: ${rotate} 0.9s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
      alternate both;
  }
`;
