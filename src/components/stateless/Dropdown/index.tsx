import { Avatar, Divider, ListItem, ListItemIcon, Menu } from '@mui/material';
import React from 'react';
import { useDropdown } from '../../hooks/useDropdown/useDropdown';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { MenuItemComponent } from './styles';
import Link from 'next/link';

export const Dropdown = () => {
  const { open, handleClick, handleClose, anchorEl } = useDropdown();
  return (
    <>
      <Avatar
        sx={{ cursor: 'pointer' }}
        id="avatar"
        onClick={handleClick as any}
      >
        A
      </Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: 'rgba(255, 255, 255, 0.8)',
          },
        }}
      >
        <Link href="/profile">
          <ListItem>
            <ListItemIcon>
              <PersonIcon color="secondary" />
            </ListItemIcon>
            <MenuItemComponent onClick={handleClose}>
              Meus dados
            </MenuItemComponent>
          </ListItem>
        </Link>
        <Divider />
        <Link href="/bookings">
          <ListItem>
            <ListItemIcon>
              <MenuBookIcon color="secondary" />
            </ListItemIcon>
            <MenuItemComponent onClick={handleClose}>
              Minhas reservas
            </MenuItemComponent>
          </ListItem>
        </Link>
        <Divider />
        <Link href="/payments">
          <ListItem>
            <ListItemIcon>
              <CreditCardIcon color="secondary" />
            </ListItemIcon>
            <MenuItemComponent onClick={handleClose}>
              Dados de pagamento
            </MenuItemComponent>
          </ListItem>
        </Link>
      </Menu>
    </>
  );
};
