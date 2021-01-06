import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import FloatingCart from '@components/FloatingCart';

jest.mock('react-router-dom');
jest.mock('@assets/icons/close.png');

jest.mock('@hooks/cart', () => {
  return {
    useCart: () => ({
      products: [
        {
          title: 'Product',
          images: [{ url: 'IMG' }, { url: 'IMG' }],
          productVariants: [{ price: 1 }],
          quantity: 2,
        },
      ],
    }),
  };
});

describe('FloatingCart Component', () => {
  it('should be able to render FloatingCart', () => {
    const { getAllByTestId, getByTestId } = render(<FloatingCart />);
    const cardBtn = getByTestId('cardBtn');
    fireEvent.mouseEnter(cardBtn);
    fireEvent.click(cardBtn);
    const bagContainer = getAllByTestId('bagContainer');
    expect(bagContainer.length).not.toBe(0);
  });
});
