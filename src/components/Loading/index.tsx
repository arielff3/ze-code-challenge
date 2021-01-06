import React from 'react';
import logoMin from '@assets/images/logo-min.png';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={logoMin} alt="logo mini" />
    </Container>
  );
};

export default Loading;
