import React from 'react';

import { Container } from './styles';

interface ErrorComponentImp {
  imgSrc: string;
  title: string;
  description: string;
  buttonLabel: string;
  onClick?(): void;
}

const ErrorComponent: React.FC<ErrorComponentImp> = ({
  title,
  imgSrc,
  description,
  onClick,
  buttonLabel,
}) => {
  return (
    <Container data-testid="errorComponent">
      <img src={imgSrc} alt="error" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" onClick={onClick}>
        {buttonLabel}
      </button>
    </Container>
  );
};

export default ErrorComponent;
