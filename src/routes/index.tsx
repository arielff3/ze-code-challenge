import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { prerenderedLazy } from '@utils/prerenderedLazy';
import Loading from '@components/Loading';

const Home = prerenderedLazy(() => import('@pages/Home'));
const GenericNotFound = prerenderedLazy(() => import('@pages/GenericNotFound'));
const Products = prerenderedLazy(() => import('@pages/Products'));
const Category = prerenderedLazy(() => import('@pages/Category'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={Products} />
        <Route path="/produtos/categoria/:title/:id" component={Category} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
