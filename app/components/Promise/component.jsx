import React from 'react';
import { Typography, Layout } from 'antd';

const PromisesComponent = ({ onPlay }) => (
  <Layout className="layout">
    <div className="top-margin">
      <Typography.Title>Промисы</Typography.Title>
    </div>

    <div>
      <h2>Привер промиса</h2>
      <p className='text'>Функция выполнится автоматически, при вызове new Promise, через 1 секунду сигнализировать, что задача выполнена с результатом "done"</p>
      <div className='html-code'>
        <pre>
          <code>
            let promise = new Promise((resolve, reject) => setTimeout(() => resolve("done"), 1000))
          </code>
        </pre>
        <button type="button" className='btn-play' onClick={onPlay}>Play</button>
      </div>
    </div>
  </Layout>
);

export default PromisesComponent;
