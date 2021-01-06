import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--dark, #333333);
  width: 100%;

  section {
    max-width: 1200px;
    padding: 10px 0;
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 25%);
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    align-items: baseline;
  }

  h2 {
    font-size: 16px;
  }

  a {
    font-size: 14px;
  }

  h2,
  a {
    color: var(--white, #fff);
  }

  img {
    max-width: 190px;
    width: 100%;
  }

  a img {
    max-width: 130px;
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;
