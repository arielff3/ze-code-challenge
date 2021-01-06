import React from 'react';
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_PRODUCTS } from '@graphql/queries';
import ProductsByCategory from '@components/ProductsByCategory';

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: {
        categoryId: 95,
        id: '532',
      },
    },
    result: {
      data: {
        poc: {
          id: '532',
          __typename: 'POC',
          products: [
            {
              id: '1',
              title: 'Product 1',
              images: [{ url: 'IMG 1' }],
              productVariants: [
                {
                  price: 1,
                  title: 'Product 1',
                  subtitle: '',
                },
              ],
            },
          ],
        },
      },
    },
  },
];

jest.mock('@assets/icons/add.png');
jest.mock('@assets/icons/less.png');

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@hooks/cart', () => {
  return {
    useCart: () => ({
      addToCart: jest.fn(),
      decrement: jest.fn(),
    }),
  };
});

describe('ProductsByCategory Component', () => {
  it('should be able to render ProductsByCategory', async () => {
    await act(async () => {
      const { getByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <ProductsByCategory categoryId={1} title="test" />
        </MockedProvider>,
      );

      await new Promise((resolve) => setTimeout(resolve, 0));
      const products = getByTestId('products');
      expect(products).toBeTruthy();
    });
  });
});
