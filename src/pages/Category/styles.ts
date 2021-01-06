import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  > section {
    padding: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;

    h2 {
      font-size: 30px;
      font-weight: 400;
    }
  }
`;

export const BreadCrumb = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;

  a {
    color: var(--text-dark, #000000);
  }
`;
