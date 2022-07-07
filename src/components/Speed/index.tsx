import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuIcon from '@mui/icons-material/Menu';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/lab';
import { CustomSpeedDialAction } from './styles';

const actions = [
  { icon: <MenuBookIcon />, name: 'Minhas reservas' },
  { icon: <CreditCardIcon />, name: 'Métodos de pagamento' },
];

export const Speed = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<MenuIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      {actions.map((action) => (
        <CustomSpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
};
