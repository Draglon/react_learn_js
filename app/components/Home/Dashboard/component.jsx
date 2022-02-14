import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Icon, Layout } from 'antd';

const DashboardComponent = () => (
  <Layout className="layout">
    <div className="top-margin">
      <Typography.Title>Промисы, async/await</Typography.Title>
    </div>

    <Link to="/promise" className='nav-link'>Promise</Link>
  </Layout>
);

export default DashboardComponent;
