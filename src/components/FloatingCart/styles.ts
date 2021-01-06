import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  flex-direction: row;
  background: transparent;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled.button`
  position: relative;
  background: var(--yellow, #ffc500);
  border: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
  }

  p {
    position: absolute;
    top: -7px;
    right: -7px;
    border: 1px solid var(--dark, #333333);
    background: var(--yellow, #ffc500);
    font-size: 15px;
    color: var(--text-dark, #000);
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;
