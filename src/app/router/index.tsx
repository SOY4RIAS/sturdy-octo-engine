import { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withSuspense } from '../components/Hoc/withSuspense';
import Loading from '../components/Loading';

const login = lazy(() => import('../screens/Login'));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={login} />
      </Switch>
    </BrowserRouter>
  );
}

export default withSuspense({ child: Router, fallback: Loading });
