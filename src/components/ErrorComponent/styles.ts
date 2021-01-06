import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 17px;
  }

  img {
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
  }

  button {
    height: 48px;
    border-radius: 40px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: box-shadow 0.2s;
    background-color: var(--yellow, #ffc500);
    padding: 12px 20px;
    color: var(--text-dark, #000);
    border: 1px solid var(--yellow, #ffc500);

    &:hover,
    &:focus {
      box-shadow: 0 5px 2px -2px var(--grey, #999999);
    }
  }
`;
