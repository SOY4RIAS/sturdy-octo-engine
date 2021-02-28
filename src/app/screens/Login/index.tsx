import { Link } from 'react-router-dom';

import { PATHS } from '../../router/constants';

function Login() {
  return (
    <>
      <h1>Login</h1>
      <Link to={PATHS.COUNTER}>go to Counter</Link>
    </>
  );
}

export default Login;
