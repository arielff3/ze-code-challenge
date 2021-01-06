import FloatingCart from '@components/FloatingCart';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ProductsByCategory from '@components/ProductsByCategory';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, BreadCrumb } from './styles';

const Category: React.FC = () => {
  const { id, title } = useParams<{ id: string; title: string }>();
  return (
    <Container>
      <Header withAddress />
      <FloatingCart />
      <section>
        <h2>{title}</h2>
        <BreadCrumb>
          <li>
            <Link to="/produtos">Página Inicial</Link>
          </li>
          ‣
          <li>
            <p>{title}</p>
          </li>
        </BreadCrumb>
        <ProductsByCategory withLimit={false} withGrid categoryId={+id} />
      </section>
      <Footer />
    </Container>
  );
};

export default Category;
