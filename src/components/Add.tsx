import React from 'react';
import { message as messageDialog, PageHeader, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FormOutlined } from '@ant-design/icons';

import Layout from './Layout';
import styles from './Add.module.css';
import { BookReqType } from '../types';

interface AddProps {
  loading: boolean;
  logout: () => void;
  onGoBack: () => void;
  addBook: (book : BookReqType) => void;
}

// [project] 컨테이너에 작성된 함수를 컴포넌트에서 이용했다.
const Add: React.FC<AddProps> = ({ loading, logout, onGoBack, addBook }) => {
  const titleRef = React.useRef<Input>(null);
  const messageRef = React.useRef<TextArea>(null);
  const authorRef = React.useRef<Input>(null);
  const urlRef = React.useRef<Input>(null);

  return (
    <Layout>      
      <PageHeader
        title={
          <div>
            <button className={styles.back_button} onClick={onGoBack}><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></button>
            <FormOutlined /> Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            key="1"
            type="primary"
            className={styles.button_logout}
            onClick={logout}
          >
            Logout
          </Button>,
        ]}
      />

      <img src="https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png" className={styles.bg} alt="books" />

      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="Title" ref={titleRef} className={styles.input} />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            placeholder="Comment"
            ref={messageRef}
            className={styles.input}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder="Author"
            ref={authorRef}
            className={styles.input}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="URL" ref={urlRef} className={styles.input} />
        </div>
        <div className={styles.button_area}>
          <Button
            size="large"
            loading={loading}
            onClick={click}
            className={styles.button}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );

  function click() {
    const title = titleRef.current!.state.value;
    const message = messageRef.current!.state.value;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error('Please fill out all inputs');
      return ;
    } else {
      const book : BookReqType ={
        title,
        message,
        author,
        url
      }
      addBook(book);
    }
  }
};
export default Add;
