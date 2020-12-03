import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Add from '../components/Add';
import { onGoBack } from '../hooks/useHistory';
import { logout as logoutSaga } from '../redux/modules/auth';
import { addBook as addBookSaga } from '../redux/modules/books';
import { RootState } from '../redux/modules/rootReducer';
import { BookReqType } from '../types';

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading,
  );
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  
  const addBook = useCallback((book : BookReqType) => {
    dispatch(addBookSaga(book));
  }, [dispatch]);
  
  return <Add loading={loading} logout={logout} onGoBack={onGoBack} addBook={addBook}/>;
};

export default AddContainer;
