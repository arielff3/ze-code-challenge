import React from 'react';
import { render } from '@testing-library/react';

import Home from '@pages/Home';
import { POC_SEARCH } from '@graphql/queries';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
  {
    request: {
      query: POC_SEARCH,
      variables: {
        algorithm: 'NEAREST',
        lat: '-23.63036',
        long: '-46.703804',
        now: '2021-01-06T21:58:10.295Z',
      },
    },
    result: {
      data: {
        pocSearch: {
          id: '532',
          address: {
            address1: 'Rua Américo Brasiliense',
            city: 'São Paulo',
            number: '1781',
            province: 'SP',
          },
        },
      },
    },
  },
];

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@assets/images/error-cup.png');
jest.mock('@services/getSuggestLocation');

describe('Home Component', () => {
  it('should be able to render Home', () => {
    window.localStorage.setItem(
      '@ZeDelivery: address',
      JSON.stringify({ address: 'Teste' }),
    );
    window.localStorage.setItem('@ZeDelivery: id', '1');

    const { getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    );
    const home = getAllByTestId('home');
    expect(home.length).not.toBe(0);
  });
});
