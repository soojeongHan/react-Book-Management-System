import { BookResType } from '../../types';
import { createActions, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import BookService from '../../services/BookService';
import { getTokenFromState } from '../utils';

export interface BooksState {
  books: BookResType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
};

const options = {
  prefix: 'my-books/books',
};

// [project] redux-action 을 이용하여, books 모듈의 액션 생성 함수와 리듀서를 작성했다.
export const { success, pending, fail } = createActions(
  {
    SUCCESS: (books) => ({ books }) ,
  },
  'PENDING',
  'FAIL',
  options,
);


const reducer = handleActions<BooksState, any>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default reducer;

// [project] 책 목록을 가져오는 saga 함수를 작성했다.
// [project] 책을 추가하는 saga 함수를 작성했다.
// [project] 책을 삭제하는 saga 함수를 작성했다.
// [project] 책을 수정하는 saga 함수를 작성했다.

// [project] saga 함수를 실행하는 액션과 액션 생성 함수를 작성했다.

export const { getBooks } = createActions(
  {
    GET_BOOKS: (url) => ({url})
  },
  options,
);

export const { addBook } = createActions(
  {
    ADD_BOOK: (book) => ({book})
  },
  options,
)

export const { editBook } = createActions(
  {
    EDIT_BOOK: (book, bookId) => ({book, bookId})
  },
  options,
)

export const { deleteBook } = createActions(
  {
    DELETE_BOOK: (bookId) => ({bookId})
  },
  options,
)

export function* sagas() {
  yield takeEvery(`${options.prefix}/GET_BOOKS`, getBookSaga);
  yield takeEvery(`${options.prefix}/ADD_BOOK`, addBookSaga);
  yield takeEvery(`${options.prefix}/EDIT_BOOK`, editBookSaga);
  yield takeEvery(`${options.prefix}/DELETE_BOOK`, deleteBookSaga);
}

function* getBookSaga(action: any) {
  try {
    yield put(pending());
    const token: string = yield select(getTokenFromState);
    const books: BookResType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
    yield put(push(action.payload.url ? action.payload.url : "/"));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}

function* addBookSaga(action: any) {
  try {
    yield put(pending());
    const token: string = yield select(getTokenFromState);
    yield call(BookService.addBook, token, action.payload.book);
    const books: BookResType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
    yield put(push('/'));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}

function* editBookSaga(action: any) {
  try {
    yield put(pending());
    const token: string = yield select(getTokenFromState);
    yield call(BookService.editBook, token, action.payload.bookId ,action.payload.book);
    const books: BookResType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
    yield put(push('/'));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}

function* deleteBookSaga(action: any) {
  try {
    yield put(pending());
    const token: string = yield select(getTokenFromState);
    yield call(BookService.deleteBook, token, action.payload.bookId);
    const books: BookResType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
    yield put(push('/'));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}