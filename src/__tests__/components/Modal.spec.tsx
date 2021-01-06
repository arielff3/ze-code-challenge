import React from 'react';
import { render } from '@testing-library/react';

import Modal from '@components/Modal';

jest.mock('@assets/images/logo-min.png');

describe('Modal Component', () => {
  it('should be able to render Modal', () => {
    const { getAllByTestId } = render(<Modal open>Content MOdal</Modal>);
    const modal = getAllByTestId('modal');
    expect(modal.length).not.toBe(0);
  });

  it('should be able to render with loading', () => {
    const { getAllByTestId } = render(
      <Modal open loading>
        Content MOdal
      </Modal>,
    );
    const loading = getAllByTestId('loading');
    expect(loading.length).not.toBe(0);
  });
});
