import { Avatar, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useDropdown } from '../../hooks/useDropdown/useDropdown';

export const Dropdown = () => {
  const { open, handleClick, handleClose, anchorEl } = useDropdown();
  return (
    <>
      <Avatar id="avatar" onClick={handleClick as any}>
        A
      </Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'avatar',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
