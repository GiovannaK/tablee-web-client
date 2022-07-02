import { Box } from '@mui/material';
import React from 'react';
import { AppBarComponent, AppBarLink } from './styles';

export const AppBarCustom = () => {
  return (
    <AppBarComponent position="static">
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <AppBarLink>Overview</AppBarLink>
        <AppBarLink>Menu</AppBarLink>
        <AppBarLink>Reviews</AppBarLink>
      </Box>
    </AppBarComponent>
  );
};
