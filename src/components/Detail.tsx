import React from 'react';
import { PageHeader, Button, Input } from 'antd';
import { BookOutlined } from '@ant-design/icons';

import Layout from './Layout';
import { BookResType } from '../types';
import styles from './Detail.module.css';

const { TextArea } = Input;

interface DetailProps {
  book: BookResType | null | undefined;
  logout: () => void;
  onGoBack: () => void;
  goEditPage: () => void;
}

// [project] 컨테이너에 작성된 함수를 컴포넌트에서 이용했다.
// [project] BookResType 의 응답 값을 이용하여, Detail 컴포넌트를 완성했다.
const Detail: React.FC<DetailProps> = ({ book, logout, onGoBack, goEditPage }) => {
  if (book === null) {
    return null;
  }

  if (book === undefined) {
    return (
      <div>
        <h1>NotFound Book</h1>
      </div>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={
          <div>
            <button className={styles.back_button} onClick={onGoBack}><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></button>
            <BookOutlined /> {book.title}
          </div>
        }
        subTitle={book.author}
        extra={[
          <Button
            key="2"
            type="primary"
            onClick={goEditPage}
            className={styles.button}
          >
            Edit
          </Button>,
          <Button
            key="1"
            type="primary"
            className={styles.button}
            onClick={logout}
          >
            Logout
          </Button>,
        ]}
      />

      <img src="/bg_list.png" className={styles.bg} alt="books" />

      <div className={styles.detail}>
        <div className={styles.message_title}></div>
        <div className={styles.message}>
          <TextArea
            rows={4}
            value={book.message}
            readOnly
            className={styles.message_textarea}
          />
        </div>
        <div className={styles.button_area}></div>
      </div>
    </Layout>
  );

};
export default Detail;
