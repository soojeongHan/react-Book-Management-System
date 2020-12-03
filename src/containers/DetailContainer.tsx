import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../components/Detail';
import { logout as logoutSaga } from '../redux/modules/auth';
import { RootState } from '../redux/modules/rootReducer';
import { BookResType } from '../types';
import { history } from '../redux/create';
import { onGoBack } from '../hooks/useHistory';

const DetailContainer = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  
  const books = useSelector<RootState, BookResType[] | null>(state => {
    return state.books.books
  })

  const bookId : number | undefined = Number(history.location.pathname.split("/").pop());
  const book : BookResType | undefined = books?.filter(v => v.bookId === bookId).pop();

  const goEditPage = useCallback(() => {
    history.push(`/edit/${bookId}`);
  }, [bookId])
  
  return <Detail book={book} logout={logout} onGoBack={onGoBack} goEditPage={goEditPage}/>;
};

export default DetailContainer;
