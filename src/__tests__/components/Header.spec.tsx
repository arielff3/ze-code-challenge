import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Header from '@components/Header';

const mockedHistoryPush = jest.fn();
jest.mock('@assets/images/logo.png');
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Header Component', () => {
  it('should be able to render Header', () => {
    const { getAllByTestId } = render(<Header />);
    const header = getAllByTestId('header');
    expect(header.length).not.toBe(0);
  });

  beforeAll(() => {
    window.localStorage.setItem(
      '@ZeDelivery: address',
      JSON.stringify({ address1: '', number: 1, city: '', province: '' }),
    );
  });

  it('should be able to render with address', () => {
    const { getAllByTestId } = render(<Header withAddress />);
    const address = getAllByTestId('address');
    expect(address.length).not.toBe(0);
  });

  it('should be able to change address', () => {
    const { getByTestId } = render(<Header withAddress />);
    const btnChangeAddress = getByTestId('btnChangeAddress');
    fireEvent.click(btnChangeAddress);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
