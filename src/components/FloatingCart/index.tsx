import React, { useMemo, useState } from 'react';
import bagIcon from '@assets/icons/bag.png';
import Bag from '@components/Bag';
import { Container, CartButton } from './styles';
import { useCart } from '../../hooks/cart';

const FloatingCart: React.FC = () => {
  const { products } = useCart();
  const [openBag, setOpenBag] = useState(false);

  const totalItensInCart = useMemo(() => {
    const productsLength = products.reduce(
      (acc, value) => acc + value.quantity,
      0,
    );

    return productsLength;
  }, [products]);

  return (
    <Container>
      <Bag data-testid="bag" open={openBag} />
      <CartButton
        data-testid="cardBtn"
        onMouseEnter={() => setOpenBag(false)}
        onClick={() => setOpenBag(true)}
        onFocusCapture={() => setOpenBag(false)}
      >
        <p>{totalItensInCart}</p>
        <img src={bagIcon} alt="bag icon" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
