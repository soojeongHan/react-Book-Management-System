import React from 'react';

import styles from './Book.module.css';
import { BookResType } from '../types';

interface BookType extends BookResType {
  goDetailPage: (bookid : number) => void;
  goEditPage: (bookid : number) => void;
  goUrlPage: (url : string) => void;
  deleteBook: (bookId : number) => void;
}

const Book: React.FC<BookType> = ({goDetailPage, goEditPage, goUrlPage, deleteBook ,...book}) => {
  // Book의 updatedAt이 없으면, createdAt을 사용하여, 날짜를 표시한다.
  const date : Date | null = book.updatedAt ? (book.updatedAt ? new Date(book.updatedAt) : null) : (book.createdAt ? new Date(book.createdAt) : null);
  const displayDate : string = date ? ((date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()+" "+date.getHours()%12+":"+date.getMinutes()+" "+(date.getHours() > 12 ? "PM" : "AM")) : "";

  return <div className={styles.book}>
    <div className={styles.title} onClick={() => goDetailPage(book.bookId)}>
      <svg viewBox="64 64 896 896" focusable="false" data-icon="book" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path></svg>
      {book.title}
    </div>
    <div className={styles.author} onClick={() => goDetailPage(book.bookId)}>
      {book.author}
    </div>
    <div className={styles.created}>{displayDate}</div>
    <div className={styles.button_group}>
      <button type="button" className="ant-btn ant-btn-primary ant-btn-circle ant-btn-sm ant-btn-icon-only button_url" onClick={() => goUrlPage(book.url)}><span role="img" aria-label="home" className="anticon anticon-home"><svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span></button>
      <button type="button" className="ant-btn ant-btn-circle ant-btn-sm ant-btn-icon-only button_edit" onClick={() => goEditPage(book.bookId)}><span role="img" aria-label="edit" className="anticon anticon-edit"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></span></button>
      <button type="button" className="ant-btn ant-btn-primary ant-btn-circle ant-btn-sm ant-btn-icon-only ant-btn-dangerous" onClick={() => deleteBook(book.bookId)}><span role="img" aria-label="delete" className="anticon anticon-delete"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg></span></button>
    </div>
  </div>;
};

export default React.memo(Book);
