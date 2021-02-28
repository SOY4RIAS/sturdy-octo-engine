import { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withSuspense } from '../components/Hoc/withSuspense';
import Loading from '../components/Loading';

import { PATHS } from './constants';

const login = lazy(() => import('../screens/Login'));
const counter = lazy(() => import('../screens/Counter'));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={login} path={PATHS.LOGIN} exact />
        <Route component={counter} path={PATHS.COUNTER} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default withSuspense({ child: Router, fallback: Loading });
