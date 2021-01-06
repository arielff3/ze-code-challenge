import React from 'react';
import { render } from '@testing-library/react';

import ErrorComponent from '@components/ErrorComponent';

describe('ErrorComponent Component', () => {
  it('should be able to render ErrorComponent', () => {
    const { getAllByTestId } = render(
      <ErrorComponent
        description="description"
        imgSrc="img"
        title="title"
        buttonLabel="butonLabel"
      />,
    );
    const errorComponent = getAllByTestId('errorComponent');
    expect(errorComponent.length).not.toBe(0);
  });
});
