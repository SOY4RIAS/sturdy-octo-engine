import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
