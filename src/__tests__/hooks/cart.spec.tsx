import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart } from '@hooks/cart';

describe('Cart hook', () => {
  it('should be able the add one product', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    act(() => {
      result.current.addToCart({
        title: 'Test',
        images: [{ url: 'Img' }],
        productVariants: [{ price: 1 }],
      });
    });
    expect(result.current.products.length).not.toEqual(0);
  });

  it('should be able the some product exist', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    act(() => {
      result.current.addToCart({
        title: 'Test',
        images: [{ url: 'Img' }],
        productVariants: [{ price: 1 }],
      });
    });
    expect(result.current.products.length).toEqual(1);
  });

  it('should be able the increment', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    let quantity = 0;
    act(() => {
      quantity = result.current.products[0].quantity;
      result.current.increment('Test');
    });
    expect(result.current.products[0].quantity).toBe(quantity + 1);
  });

  it('should be able the decrement', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    let quantity = 0;
    act(() => {
      quantity = result.current.products[0].quantity;
      result.current.decrement('Test');
    });
    expect(result.current.products[0].quantity).toBe(quantity - 1);
  });

  it('should be able the finalizate', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    act(() => {
      result.current.finalizate();
    });
    expect(result.current.products.length).toBe(0);
  });

  it('should be able the delete item', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    act(() => {
      result.current.deleteItem('Test');
    });
    expect(result.current.products.length).toEqual(0);
  });
});
