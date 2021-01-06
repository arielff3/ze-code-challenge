import ErrorComponent from '@components/ErrorComponent';
import React from 'react';
import errorCup from '@assets/images/error-cup.png';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

const GenericNotFound: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <ErrorComponent
        onClick={() => history.push('/')}
        buttonLabel="Ir para a página inicial"
        imgSrc={errorCup}
        title="Ops..."
        description="Algo deu errado."
      />
    </Container>
  );
};

export default GenericNotFound;
