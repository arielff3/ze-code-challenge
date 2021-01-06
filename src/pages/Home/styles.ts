import styled from 'styled-components';
import bg from '@assets/images/home-bg.jpg';

interface Columnimp {
  width: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  p {
    color: var(--text-dark, #000000);
    text-align: center;
    background: var(--white, #ffffff);
    padding: 10px;
    border-radius: 5px;
  }

  > section {
    padding: 32px;
    flex: 1;
    width: 100%;
    background: url(${bg}) no-repeat;
    background-size: cover;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;

    h1 {
      font-size: 36px;
      line-height: 44px;
      color: var(--dark, #333333);
      max-width: 330px;
      text-align: center;
      font-weight: 400;

      @media screen and (min-width: 768px) {
        max-width: 592px;
      }

      strong {
        font-weight: bold;
      }
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  max-width: 315px;
  margin: 0 auto;
  height: 46px;
  padding: 0 12px;
  border-radius: 5px;
  border: 1px solid var(--grey, #999999);

  @media screen and (min-width: 768px) {
    max-width: 592px;
  }

  > img {
    margin-right: 12px;
  }

  input {
    flex-grow: 1;
    border: none;
    height: 100%;
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  flex-grow: 1;

  input {
    padding: 12px;
    height: 48px;
    border-radius: 5px;
    border: 1px solid var(--grey, #999999);
  }

  input,
  section {
    width: 100%;
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
    }
  }

  button {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: box-shadow 0.2s;
  }

  .backButton {
    background: var(--dark-red, #e62429);
    padding: 12px;
    color: var(--white, #fff);
    border: 1px solid var(--dark-red, #e62429);

    &:hover,
    &:focus {
      box-shadow: 0 5px 2px -2px var(--grey, #999999);
    }

    > img {
      margin-right: 10px;
    }
  }

  .viewProductsButton {
    background-color: var(--yellow, #ffc500);
    padding: 12px 15px;
    color: var(--text-dark, #000);
    border: 1px solid var(--yellow, #ffc500);

    &:hover,
    &:focus {
      box-shadow: 0 5px 2px -2px var(--grey, #999999);
    }
  }
`;

export const Column = styled.div<Columnimp>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.width && props.width}%;
    margin: 10px 0;
  }
`;
