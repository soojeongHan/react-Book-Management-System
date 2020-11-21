import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '../components/List';
import { logout as logoutSaga } from '../redux/modules/auth';
import { getBooks as getBooksSaga } from "../redux/modules/books";
import { push } from 'connected-react-router';
import { RootState } from '../redux/modules/rootReducer';
import { BookResType } from '../types';
import { deleteBook as deleteBookSaga } from "../redux/modules/books";

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const goAdd = useCallback(() => {
    dispatch(push('/add'));
  }, [dispatch]);
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  const goDetail = useCallback((bookid) => {
    dispatch(push(`/book/${bookid}`));
  }, [dispatch]);
  const goEditPage = useCallback((bookid) => {
    dispatch(push(`/edit/${bookid}`));
  }, [dispatch])
  

  useEffect(() => {
    dispatch(getBooksSaga());
  }, [dispatch]);

  const books = useSelector<RootState, BookResType[] | null>(state => {
    return state.books.books
  })

  const goUrlPage = useCallback((url : string) => {
    // 해당 페이지에서 새로운 페이지를 만들고, URL 주소로 페이지 열기
    // window.open('about:blank')?.location.assign(`http://${url}`);
    
    // 해당 페이지에서 바로 URL 주소로 페이지 열기
    window.location.assign(`http://${url}`);
  }, []);

  const deleteBook = useCallback((bookId : number) => {
    dispatch(deleteBookSaga(bookId));
  }, [dispatch]);
  
  // [project] saga 함수를 실행하는 액션 생성 함수를 실행하는 함수를 컨테이너에 작성했다.
  // [project] 컨테이너에서 useDispatch, useSelector, useCallback 을 활용해서 중복없이 비동기 데이터를 보여주도록 처리했다.

  return <List books={books} loading={false} goAdd={goAdd} logout={logout} goDetail={goDetail} goEditPage={goEditPage} goUrlPage={goUrlPage} deleteBook={deleteBook}/>;
};

export default ListContainer;
