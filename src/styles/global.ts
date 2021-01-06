import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --dark-blue: #167ABC;
    --dark-red: #e62429;
    --grey: #999999;
    --grey-low-opacity: #9999995e;
    --yellow: #FFC500;
    --dark: #333333;
    --white: #ffffff;
    --text-hover-button: #000000;
    --text-dark: #000000;
    --overload: rgba(0,0,0,0.3);
  }

  ::placeholder {
    color: var(--smote, #8E8E8E);
    font-size: 14px;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: var(--dark-smoke, #000);
  }

  input {
    font-family: 'Roboto';
  }

  p, a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .select {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;

    .select__control {
      height: 100%;
      border: 0;
      box-shadow: none;
    }

    .select__menu {
      width: 100%;

      @media screen and (min-width: 768px) {
        width: 485px;
      }
    }
  }

`;
