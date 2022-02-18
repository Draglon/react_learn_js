import React from 'react';
import { Typography, Layout } from 'antd';
// import {  } from 'ramda';

const GeneratorsComponent = ({
  calendar,
  onPrevMonth,
  onNextMonth,
  onPlay,
}) => (
  <Layout className="layout">
    <div className="top-margin">
      <Typography.Title>Генераторы</Typography.Title>
    </div>

    <div className='example'>
      <h1 className='example__title'>Пример 1:</h1>
      <h2 className='example__subtitle'>Кaлендарь</h2>
      <p className='example__text'></p>
      <div className='example__html-code'>
        <div className='calendar'>
          <div className='calendar_wrap'>
            <div className='calendar__header'>
              <div className='calendar__header-btns'>
              <button
                className='example__btn-play'
                type="button"
                onClick={onPrevMonth}
              >
                Prev month
              </button>
              <button
                className='example__btn-play'
                type="button"
                onClick={onNextMonth}
              >
                Next month
              </button>
              </div>
              <div className='calendar__days'>
                <div className='calendar__day'>ПН</div>
                <div className='calendar__day'>ВТ</div>
                <div className='calendar__day'>СР</div>
                <div className='calendar__day'>ЧТ</div>
                <div className='calendar__day'>ПТ</div>
                <div className='calendar__day'>СБ</div>
                <div className='calendar__day'>ВC</div>
              </div>
            </div>
            <ul className='calendar__list'>
              {calendar.map(day =>  (
                <li className='calendar__item' key={day}>
                  <div>{day}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className='example__btn-play'
          type="button"
          onClick={onPlay}
        >
          Play
        </button>
      </div>
    </div>
  </Layout>
);

export default GeneratorsComponent;
