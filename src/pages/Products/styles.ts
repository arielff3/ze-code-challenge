import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const CategoryList = styled.div`
  padding: 0 20px;
  width: 100%;
  gap: 20px 0;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 1100px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
    color: var(--text-dark, #000000);
    font-size: 15px;
  }

  img {
    width: 30px;
  }
`;
