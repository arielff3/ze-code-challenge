import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useCart } from '@hooks/cart';
import { formatCurrency } from '@utils/formatCurrency';
import trash from '@assets/icons/trash.png';
import less from '@assets/icons/less.png';
import close from '@assets/icons/close.png';
import emptyBag from '@assets/images/emptyBag.png';
import add from '@assets/icons/add.png';
import useOnClickOutside from '@utils/useOnClickOutside';
import { Container, BagCard, Info, Empty } from './styles';

interface BagImp {
  open: boolean;
  loading?: boolean;
}

interface ProductImp {
  title: string;
  images: {
    url: string;
  }[];
  productVariants: {
    price: number;
  }[];
}

const Bag: React.FC<BagImp> = ({ open }) => {
  const {
    products,
    cartTotal,
    addToCart,
    decrement,
    deleteItem,
    finalizate,
  } = useCart();
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useOnClickOutside(contentRef, () => setIsOpen(false));

  const handleAddToCart = useCallback(
    (product: ProductImp): void => {
      addToCart(product);
    },
    [addToCart],
  );

  return (
    <>
      {isOpen && (
        <Container data-testid="bagContainer">
          <div ref={contentRef}>
            <h2>Sacola</h2>
            <button
              type="button"
              className="close"
              data-testid="btnClose"
              onClick={() => setIsOpen(false)}
            >
              <img src={close} alt="close icon" />
            </button>
            <main>
              {products.length > 0 ? (
                products.map((product) => (
                  <BagCard key={product.title} data-testid="listProducts">
                    <img src={product.images[0].url} alt={product.title} />
                    <section>
                      <aside>
                        <div>
                          <h5>{product.title}</h5>
                          <p>
                            {formatCurrency(product.productVariants[0].price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          data-testid="btnRemove"
                          onClick={() => {
                            if (
                              window.confirm(
                                `Deseja remover esse produto? ${product.title}`,
                              )
                            )
                              deleteItem(product.title);
                          }}
                        >
                          <img src={trash} alt="lixeira icon" />
                        </button>
                      </aside>
                      <footer>
                        <button
                          type="button"
                          data-testid="btnDecrement"
                          onClick={() => decrement(product.title)}
                        >
                          <img src={less} alt="menos icon" />
                        </button>
                        {product.quantity}
                        <button
                          type="button"
                          data-testid="btnAdd"
                          onClick={() => handleAddToCart(product)}
                        >
                          <img src={add} alt="add" />
                        </button>
                      </footer>
                    </section>
                  </BagCard>
                ))
              ) : (
                <Empty>
                  <img src={emptyBag} alt="sacola vazia" />
                  <p> Putz, está vazia! </p>
                  <p>Você não possui nenhum produto na sua sacola</p>
                </Empty>
              )}
            </main>
            {products.length > 0 && (
              <Info>
                <h4>Total: {cartTotal}</h4>
                <button
                  type="button"
                  data-testid="btnFinalizate"
                  onClick={() => {
                    finalizate();
                    setIsOpen(false);
                  }}
                >
                  Finalizar Pedido
                </button>
              </Info>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Bag;
