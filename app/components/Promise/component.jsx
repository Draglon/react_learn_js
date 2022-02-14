import React from 'react';
import { Typography, Layout } from 'antd';

const PromisesComponent = ({
  onPlay,
  onPlayAnimation,
  onPlayQuery,
  onPlayPromisify,
}) => (
  <Layout className="layout">
    <div className="top-margin">
      <Typography.Title>Промисы</Typography.Title>
    </div>

    <div className='example'>
      <h1 className='example__title'>Пример 1:</h1>
      <h2 className='example__subtitle'>Пример с задержкой времени:</h2>
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

    <div className='example'>
      <h1 className='example__title'>Пример 2:</h1>
      <h2 className='example__subtitle'>Aнимация круга с помощью промиса:</h2>
      <p className='text'>Отрисовать анимацию и вывести сообщение после отрисовки.</p>
      <button type="button" className='btn-play' onClick={onPlayAnimation}>Play</button>
      <div className='circle-wrapper'>
        <div id="circle" className='circle'></div>
      </div>
    </div>

    <div className='example'>
      <h1 className='example__title'>Пример 3:</h1>
      <h2 className='example__subtitle'>Цепочка промисов:</h2>
      <p className='text'>Вывести результат цепочки промисов перемножая на 10</p>
      <button type="button" className='btn-play' onClick={onPlayQuery}>Play</button>
    </div>
    
    <div className='example'>
      <h1 className='example__title'>Пример 4:</h1>
      <h2 className='example__subtitle'>Промисификация:</h2>
      <p className='text'>Промисификация колбека loadsrc.</p>
      <button type="button" className='btn-play' onClick={onPlayPromisify}>Play</button>
    </div>
  </Layout>
);

export default PromisesComponent;
