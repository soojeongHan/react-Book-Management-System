import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import TokenService from '../services/TokenService';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory({basename: process.env.PUBLIC_URL});
const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const token = TokenService.get();

  const persistConfig = {
    // key : ‘root’ means that the whole state gets persisted
    key: 'root',
    // storage : Indicates what kind of storage is used, there are many options available.
    storage
  };
  
  const enhancedReducer = persistReducer(persistConfig, rootReducer(history));

  const store = createStore(
    enhancedReducer,
    {
      auth: {
        token,
        loading: false,
        error: null,  
      },
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};

export default create;
