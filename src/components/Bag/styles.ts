import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
   0% {
    transform: translatex(400px);
  }
  100% {
    transform: translatex(0);
  }
`;

export const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--overload, rgba(0, 0, 0, 0.3));
  z-index: 20;

  > div {
    position: absolute;
    right: 0;
    z-index: 20;
    top: 0;
    height: 100vh;
    background: var(--white, #ffffff);
    width: 100%;
    padding: 20px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 70% 20%;

    overflow-y: auto;

    animation: ${slideIn} 0.4s;

    @media screen and (min-width: 1024px) {
      max-width: 440px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 500px;
    }
  }

  button img {
    width: 15px;
  }

  .close {
    position: absolute;
    right: 20px;
    border: 3px solid var(--yellow);
    border-top: 0;
    padding: 3px;
  }

  h2 {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 4px;
  }

  main {
    height: 100%;
    overflow-x: auto;
    padding: 0 10px;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: var(--grey-low-opacity, #9999995e);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--yellow, #ffc500);
    }
  }
`;

export const BagCard = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  height: auto;
  padding: 15px 10px;
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);

  button {
    background: transparent;
    border: 0;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h5,
    p {
      font-size: 14px;
    }

    h5 {
      max-width: 200px;
      width: 100%;
      color: var(--grey, #999999);
      margin-bottom: 5px;
    }
  }

  footer {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.1px solid var(--grey-low-opacity, #9999995e);
    padding: 2px;
    border-radius: 5px;

    button {
      flex: 0.1;
    }
  }

  img {
    width: 90px;
  }
`;

export const Info = styled.footer`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h4 {
    font-size: 18px;
    margin-bottom: 13px;
  }

  button {
    background: var(--yellow, #ffc500);
    padding: 12px;
    width: 100%;
    border: 0;
    height: 48px;
    text-transform: uppercase;
    border-radius: 40px;
    transition: background-color 0.2s;
  }
`;

export const Empty = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 240px;
  }
`;
