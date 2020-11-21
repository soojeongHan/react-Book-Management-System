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
  
  // [project] saga 함수를 실행하는 액션 생성 함수를 실행하는 함수를 컨테이너에 작성했다.
  // [project] 컨테이너에서 useDispatch, useSelector, useCallback 을 활용해서 중복없이 비동기 데이터를 보여주도록 처리했다.
  // [project] Edit 나 Detail 컴포넌트에서 새로고침 시, 리스트가 없는 경우, 리스트를 받아오도록 처리했다.

  return <Detail book={book} logout={logout} onGoBack={onGoBack} goEditPage={goEditPage}/>;
};

export default DetailContainer;
