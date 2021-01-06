import styled, { keyframes } from 'styled-components';
import logoMin from '@assets/images/logo-min.png';

const animationIn = keyframes`
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
`;

const rotateLoading = keyframes`
  0% {
    transform: rotateY(0)
  }
  100% {
    transform: rotateY(360deg)
  }
`;

export const Container = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--overload, rgba(0, 0, 0, 0.3));

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animationIn} 0.3s linear;

  > div {
    position: relative;
    width: 100%;
    max-width: 80%;
    border-radius: 20px;
    background: var(--white, #fff);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 50px;

    @media screen and (min-width: 768px) {
      max-width: 700px;
    }
  }
`;

export const Loading = styled.img.attrs(() => ({
  src: logoMin,
  alt: 'logo-min',
}))`
  width: 60px;
  height: 60px;
  animation: ${rotateLoading} 1s linear infinite;
`;
