import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@graphql/queries';
import { formatCurrency } from '@utils/formatCurrency';
import add from '@assets/icons/add.png';
import less from '@assets/icons/less.png';
import { useCart } from '@hooks/cart';
import Loading from '@components/Loading';
import { useHistory } from 'react-router-dom';
import { Container, Card } from './styles';

interface ProductImp {
  title: string;
  images: {
    url: string;
  }[];
  productVariants: {
    price: number;
  }[];
}

const ProductsByCategory: React.FC<{
  categoryId: number;
  title?: string;
  withLimit?: boolean;
  withGrid?: boolean;
}> = ({ categoryId, title, withLimit = true, withGrid = false }) => {
  const { addToCart, decrement } = useCart();
  const history = useHistory();

  const handleAddToCart = useCallback(
    (product: ProductImp): void => {
      addToCart(product);
    },
    [addToCart],
  );

  const { data, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      id: window.localStorage.getItem('@ZeDelivery: id'),
      categoryId,
    },
    onError: () => {
      history.push('/404');
    },
  });

  if (loading) {
    return <Loading data-testid="loading" />;
  }

  return (
    <Container withGrid={withGrid} data-testid="products">
      {title && <h2>{title}</h2>}
      <div>
        {data && data.poc.products.length === 0 && (
          <p>Nenhum produto encontrado</p>
        )}
        {data &&
          data.poc.products.length > 0 &&
          data.poc.products
            .slice(0, withLimit ? 5 : 200)
            .map((product: ProductImp) => (
              <Card key={product.title} data-testid="card">
                <div>
                  <img src={product.images[0].url} alt={product.title} />
                  <h3>{product.title}</h3>
                </div>
                <footer>
                  <button
                    type="button"
                    className="removeToCartButton"
                    onClick={() => decrement(product.title)}
                  >
                    <img src={less} alt="less icon" />
                  </button>
                  <p>{formatCurrency(product.productVariants[0].price)}</p>
                  <button
                    type="button"
                    className="addToCartButton"
                    onClick={() => handleAddToCart(product)}
                  >
                    <img src={add} alt="add icon" />
                  </button>
                </footer>
              </Card>
            ))}
      </div>
    </Container>
  );
};

export default ProductsByCategory;
