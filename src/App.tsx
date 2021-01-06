import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from 'services/apollo';
import Hooks from 'hooks';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Hooks>
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyle />
          <Routes />
        </Router>
      </ApolloProvider>
    </Hooks>
  );
};

export default App;
