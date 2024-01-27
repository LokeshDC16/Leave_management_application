import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)(({ theme }) => ({
  background: 'black', // Blue
}));

const Tabs = styled(NavLink)(({ theme }) => ({
  fontSize: '18px',
  marginRight: '20px',
  color: '#fff', // White
  textDecoration: 'none',
  padding: '10px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#ffeb3b', // Yellow on hover
  },
  '&.active': {
    fontWeight: 'bold',
  },
}));

const NavBar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/' activeClassName="active">Leave Management Application</Tabs>
        <Tabs to='/all' activeClassName="active">All Users</Tabs>
        <Tabs to='/add' activeClassName="active">Add Users</Tabs>
      </Toolbar>
    </Header>
  );
}

export default NavBar;
