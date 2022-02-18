import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const DropdownMenuComponent = ({ deleteSessionRequest }) => (
  <Menu>
    <Menu.Item>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={deleteSessionRequest}>Logout</Menu.Item>
  </Menu>
);

DropdownMenuComponent.propTypes = {
  deleteSessionRequest: PropTypes.func.isRequired,
};

export default DropdownMenuComponent;
