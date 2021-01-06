import styled from 'styled-components';

export const Container = styled.header`
  height: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  background-color: var(--dark, #333333);
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 72px;
  }

  div {
    padding: 20px 10px;
    max-width: 1200px;
    flex-grow: 1;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;

    @media screen and (min-width: 768px) {
      justify-content: space-between;
      padding: 0 10px;
    }

    p {
      color: var(--white, #ffffff);
      font-size: 16px;
      text-align: center;
      margin: 15px 0;

      @media screen and (min-width: 768px) {
        margin: 0;
      }
    }

    img {
      max-width: 120px;
      width: 100%;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      transition: box-shadow 0.2s;
      background: var(--white, #ffffff);
      padding: 12px;
      color: var(--text-dark, #000);
      border: 1px solid var(--white, #ffffff);

      &:hover,
      &:focus {
        box-shadow: 0 5px 2px -2px var(--grey, #999999);
      }
    }
  }
`;
