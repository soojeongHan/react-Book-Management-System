import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import TokenService from '../services/TokenService';
// react-persist : 리액트 컴포넌트가 새로고침되더라도 상태를 유지시켜주는 라이브러리, 참고 : <https://levelup.gitconnected.com/persisting-your-react-application-state-with-redux-and-typescript-51e4e66c4e53>
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
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
