import styled, { keyframes, css } from 'styled-components';

const slide = keyframes`
   0% {
    transform: translatey(0);
  }
  100% {
    transform: translatey(-15px);
  }
`;
const slideOut = keyframes`
   0% {
    transform: translatey(-15px);
  }
  100% {
    transform: translatey(0);
  }
`;

interface ContainerImp {
  withGrid: boolean;
}

export const Container = styled.div<ContainerImp>`
  width: 100%;
  max-width: 1100px;
  margin: 15px 0;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    padding: 20px;

    @media screen and (min-width: 768px) {
      justify-content: center;
    }

    ${(props) =>
      props.withGrid &&
      css`
        overflow-x: hidden;
        flex-wrap: wrap;
      `}

    > p {
      font-size: 14px;
      color: var(--grey, #999999);
    }
  }

  h2 {
    margin-bottom: 20px;
    font-size: 20px;
    color: var(--grey, #999999);
    font-weight: 400;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  padding: 10px;
  background: var(--white, #fff);
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  animation: ${slideOut} 0.3s;
  transition: all 0.3s;

  &:hover,
  &:focus {
    animation: ${slide} 0.3s both;
    button {
      opacity: 1;
      visibility: visible;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    height: 140px;
  }

  h3 {
    font-size: 15px;
    text-align: center;
    color: var(--grey, #999999);
    font-weight: 400;
  }

  img {
    width: 90px;
  }

  p {
    font-size: 15px;
    font-weight: 800;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;

    img {
      width: 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      transition: opacity 0.4s;

      @media screen and (min-width: 768px) {
        opacity: 0;
        visibility: hidden;
      }
    }

    .addToCartButton {
      background: var(--yellow, #ffc500);
    }
    .removeToCartButton {
      background: var(--dark-red, #e62429);
      color: var(--white, #ffffff);
    }
  }
`;
