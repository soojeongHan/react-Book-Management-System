import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook as editBookSaga } from "../redux/modules/books";
import Edit from '../components/Edit';
import { onGoBack } from '../hooks/useHistory';
import { logout as logoutSaga } from '../redux/modules/auth';
import { RootState } from '../redux/modules/rootReducer';
import { BookReqType, BookResType } from '../types';
import { history } from '../redux/create';

const EditContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading,
  );

  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  const books = useSelector<RootState, BookResType[] | null>(state => {
    return state.books.books
  })
  const bookId : number | undefined = Number(history.location.pathname.split("/").pop());

  const book : BookResType | undefined = books?.filter(v => v.bookId === bookId).pop();

  const editBook = useCallback((book : BookReqType) => {
    dispatch(editBookSaga(book, bookId));
  }, [bookId, dispatch]);
  
  return <Edit book={book} loading={loading} logout={logout} onGoBack={onGoBack} editBook={editBook} />;
};

export default EditContainer;
