import React from 'react';
import { Table, PageHeader, Button } from 'antd';

import styles from './List.module.css';
import Layout from './Layout';
import Book from './Book';
import { BookResType } from '../types';

interface BooksProps {
  books: BookResType[] | null;
  loading: boolean;
  goAddPage: () => void;
  goDetailPage: (bookid: number) => void;
  goEditPage: (bookid: number) => void;
  logout: () => void;
  goUrlPage: (url : string) => void;
  deleteBook: (bookId: number) => void;
}

const Books: React.FC<BooksProps> = ({ books, loading, goAddPage, logout, goDetailPage, goEditPage, goUrlPage, deleteBook }) => {
  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button
            key="2"
            type="primary"
            className={styles.button}
            onClick={goAddPage}
          >
            Add Book
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
      <img src="https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png" style={{ width: '100%' }} alt="books" />
      
      <Table
        dataSource={books || []}
        columns={[
          {
            title: 'Book',
            dataIndex: 'book',
            key: 'book',
            render: (text, record) => (
              <Book {...record} key={'{record.bookId}'} goDetailPage={goDetailPage} goEditPage={goEditPage} goUrlPage={goUrlPage} deleteBook={deleteBook}/>
            ),
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        className={styles.table}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  );
};

export default Books;