import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Icon, Layout } from 'antd';

const DashboardComponent = () => (
  <Layout className="layout">
    <div className="top-margin">
      <Typography.Title>Примеры на javascript</Typography.Title>
    </div>
    <ul className='nav'>
      <li className='nav__item'>
        <Link to="/promise" className='nav__link'>Promise</Link>
      </li>
      <li className='nav__item'>
        <Link to="/generators" className='nav__link'>Generators</Link>
      </li>
    </ul>
  </Layout>
);

export default DashboardComponent;
