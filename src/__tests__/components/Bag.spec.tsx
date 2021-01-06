import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Bag from '@components/Bag';

jest.mock('react-router-dom');
jest.mock('@assets/icons/close.png');

let mockProducts: {
  title: string;
  images: {
    url: string;
  }[];
  productVariants: {
    price: number;
  }[];
}[] = [];

const mockAddToCart = jest.fn();
const mockDeleteItem = jest.fn();
const mockDecrement = jest.fn();
const mockFinalizate = jest.fn();

jest.mock('@hooks/cart', () => {
  return {
    useCart: () => ({
      products: mockProducts,
      cartTotal: '',
      addToCart: mockAddToCart,
      decrement: mockDecrement,
      deleteItem: mockDeleteItem,
      finalizate: mockFinalizate,
    }),
  };
});

describe('Bag Component', () => {
  it('should be able to render Bag', () => {
    const { getAllByTestId, getByTestId } = render(<Bag open />);
    const bagContainer = getAllByTestId('bagContainer');
    const btnClose = getByTestId('btnClose');
    fireEvent.click(btnClose);
    expect(bagContainer.length).not.toBe(0);
  });

  beforeAll(() => {
    mockProducts = [
      {
        title: 'Product',
        images: [{ url: 'IMG' }],
        productVariants: [{ price: 1 }],
      },
    ];
  });

  it('should be able to list products', () => {
    const { getAllByTestId, getByTestId } = render(<Bag open />);
    const btnAdd = getByTestId('btnAdd');
    fireEvent.click(btnAdd);
    const listProducts = getAllByTestId('listProducts');
    expect(listProducts.length).not.toBe(0);
  });

  it('should be able to handle add', () => {
    const { getByTestId } = render(<Bag open />);
    const btnAdd = getByTestId('btnAdd');
    fireEvent.click(btnAdd);
    expect(mockAddToCart).toHaveBeenCalled();
  });

  it('should be able to handle decrement', () => {
    const { getByTestId } = render(<Bag open />);
    const btnDecrement = getByTestId('btnDecrement');
    fireEvent.click(btnDecrement);
    expect(mockDecrement).toHaveBeenCalled();
  });

  it('should be able to handle finalizate', () => {
    const { getByTestId } = render(<Bag open />);
    const btnFinalizate = getByTestId('btnFinalizate');
    fireEvent.click(btnFinalizate);
    expect(mockFinalizate).toHaveBeenCalled();
  });

  it('should be able to handle remove', () => {
    const { getByTestId } = render(<Bag open />);
    const btnRemove = getByTestId('btnRemove');
    window.confirm = jest.fn().mockImplementation(() => true);
    fireEvent.click(btnRemove);
    expect(window.confirm).toHaveBeenCalled();
    expect(mockDeleteItem).toHaveBeenCalled();
  });
});
