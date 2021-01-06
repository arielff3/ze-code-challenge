import { formatCurrency } from '@utils/formatCurrency';
import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

interface ProductImp {
  title: string;
  images: {
    url: string;
  }[];
  productVariants: {
    price: number;
  }[];
  quantity: number;
}

interface CartContext {
  products: ProductImp[];
  addToCart(item: Omit<ProductImp, 'quantity'>): void;
  increment(title: string): void;
  decrement(title: string): void;
  finalizate(): void;
  deleteItem(title: string): void;
  cartTotal: string;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductImp[]>([]);

  useEffect(() => {
    const loadProducts = async (): Promise<void> => {
      const storageProducts = localStorage.getItem('@ZeDelivery: products');
      if (storageProducts) {
        setProducts(JSON.parse(storageProducts));
      }
    };
    loadProducts();
  }, []);

  const addToCart = useCallback(
    (product) => {
      const productExists = products.some((p) => p.title === product.title);

      if (productExists) {
        const newProducts = products.map((p) =>
          p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p,
        );

        setProducts(newProducts);

        localStorage.setItem(
          '@ZeDelivery: products',
          JSON.stringify(newProducts),
        );
        return;
      }

      const newProduct: ProductImp = { ...product, quantity: 1 };

      setProducts([...products, newProduct]);

      localStorage.setItem(
        '@ZeDelivery: products',
        JSON.stringify([...products, newProduct]),
      );
    },
    [products],
  );

  const increment = useCallback(
    (title) => {
      const newProducts = products.map((p) =>
        p.title === title ? { ...p, quantity: p.quantity + 1 } : p,
      );

      setProducts(newProducts);

      localStorage.setItem(
        '@ZeDelivery: products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async (title) => {
      const newProducts = products.map((p) =>
        p.title === title ? { ...p, quantity: p.quantity - 1 } : p,
      );

      const filterProducts = newProducts.filter(
        (p) => !(p.title === title && p.quantity === 0),
      );

      setProducts(filterProducts);

      localStorage.setItem(
        '@ZeDelivery: products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const finalizate = useCallback(() => {
    setProducts([]);
    localStorage.removeItem('@ZeDelivery: products');
  }, []);

  const deleteItem = useCallback(
    (title: string) => {
      const newProducts = products.filter((p) => p.title !== title);
      setProducts(newProducts);
      localStorage.setItem(
        '@ZeDelivery: products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const cartTotal = useMemo(() => {
    const productsTotal = products.reduce(
      (acc, value) => acc + value.productVariants[0].price * value.quantity,
      0,
    );

    return formatCurrency(productsTotal);
  }, [products]);

  const value = React.useMemo(
    () => ({
      addToCart,
      increment,
      decrement,
      products,
      finalizate,
      deleteItem,
      cartTotal,
    }),
    [
      products,
      addToCart,
      increment,
      decrement,
      finalizate,
      deleteItem,
      cartTotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = (): CartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
};

export { CartProvider, useCart };
