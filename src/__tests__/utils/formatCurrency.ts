import { formatCurrency } from '@utils/formatCurrency';

describe('formatCurrency', () => {
  it('should be able to format number', () => {
    const numberFormat = formatCurrency(100);
    expect(/[R$\\/]/.test(numberFormat)).toBeTruthy();
  });
});
