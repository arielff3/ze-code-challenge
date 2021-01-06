import React, { useEffect } from 'react';
import Header from '@components/Header';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '@graphql/queries';
import beerIcon from '@assets/icons/beer.png';
import distilled from '@assets/icons/distilled.png';
import wine from '@assets/icons/wine.png';
import juice from '@assets/icons/juice.png';
import chips from '@assets/icons/chips.png';
import others from '@assets/icons/others.png';

import ProductsByCategory from '@components/ProductsByCategory';
import Footer from '@components/Footer';
import FloatingCart from '@components/FloatingCart';
import Loading from '@components/Loading';
import { Container, CategoryList } from './styles';

const Products: React.FC = () => {
  const history = useHistory();

  const { data, loading } = useQuery<{
    allCategory: { title: string; id: number }[];
  }>(GET_ALL_CATEGORIES, {
    onError: () => {
      history.push('/404');
    },
  });

  useEffect(() => {
    const checkThisLocationExist = (): void => {
      const existId = window.localStorage.getItem('@ZeDelivery: id');
      const existAddress = window.localStorage.getItem('@ZeDelivery: address');
      if (!existId && !existAddress) {
        history.push('/');
      }
    };
    checkThisLocationExist();
  }, [history]);

  const categoriesItemsIcons: { [key: string]: string } = {
    Cervejas: beerIcon,
    Destilados: distilled,
    Vinhos: wine,
    'Sem álcool': juice,
    Petiscos: chips,
    Outros: others,
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header withAddress />
      <FloatingCart />
      <CategoryList>
        {data &&
          data.allCategory.map((category) => {
            return (
              <Link
                to={`/produtos/categoria/${category.title}/${category.id}`}
                key={category.id}
              >
                <img src={categoriesItemsIcons[category.title]} alt="icon" />
                <p>{category.title}</p>
              </Link>
            );
          })}
      </CategoryList>
      {data &&
        data.allCategory.map((category) => {
          return (
            <ProductsByCategory
              categoryId={category.id}
              title={category.title}
              key={category.id}
            />
          );
        })}
      <Footer />
    </Container>
  );
};

export default Products;
