import { BookReqType, BookResType } from '../../types';
import { createActions, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import BookService from '../../services/BookService';
import { getTokenFromState } from '../utils';
import { AnyAction } from 'redux';

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

export const { getBooks, addBook, editBook, deleteBook } = createActions(
  {
    GET_BOOKS: () => {},
    ADD_BOOK: (book: BookReqType) => ({book}),
    EDIT_BOOK: (book: BookReqType, bookId: number) => ({book, bookId}),
    DELETE_BOOK: (bookId: number) => ({bookId})
  },
  options,
);

export function* sagas() {
  yield takeEvery(`${options.prefix}/GET_BOOKS`, getBookSaga);
  yield takeEvery(`${options.prefix}/ADD_BOOK`, addBookSaga);
  yield takeEvery(`${options.prefix}/EDIT_BOOK`, editBookSaga);
  yield takeEvery(`${options.prefix}/DELETE_BOOK`, deleteBookSaga);
}

function* getBookSaga() {
  try {
    yield put(pending());
    const token: string = yield select(getTokenFromState);
    const books: BookResType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
    yield put(push("/"));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}

interface AddBookAction extends AnyAction {
  payload : {
    book : BookReqType;
  }
}

function* addBookSaga(action: AddBookAction) {
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

interface EditBookAction extends AnyAction {
  payload : {
    bookId : number,
    book : BookReqType
  }
}

function* editBookSaga(action: EditBookAction) {
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

interface DeleteBookAction extends AnyAction {
  payload : {
    bookId : number,    
  }
}

function* deleteBookSaga(action: DeleteBookAction) {
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