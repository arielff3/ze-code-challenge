import React from 'react';

import logo from '@assets/images/logo.png';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

interface HeaderImp {
  withAddress?: boolean;
}

const Header: React.FC<HeaderImp> = ({ withAddress = false }) => {
  const address = window.localStorage.getItem('@ZeDelivery: address');
  const history = useHistory();

  return (
    <Container data-testid="header">
      <div>
        <img src={logo} alt="logo" />
        {withAddress && address && (
          <>
            <p data-testid="address">
              {JSON.parse(address).address1}, Nº{JSON.parse(address).number},
              {JSON.parse(address).city}/{JSON.parse(address).province}
            </p>
            <button
              data-testid="btnChangeAddress"
              type="button"
              onClick={() => {
                window.localStorage.clear();
                history.push('/');
              }}
            >
              Alterar endereço
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;
