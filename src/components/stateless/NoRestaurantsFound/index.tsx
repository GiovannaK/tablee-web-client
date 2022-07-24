import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { NotFoundText } from './styles';

export const NoRestaurantsFound = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign: "center"}}>
          <NotFoundText>
            Nenhum restaurante encontrado para esta categoria!
          </NotFoundText>
          <img
            src="../notfound.svg"
            alt="restaurant não encontrado"
            style={{ maxWidth: '35%' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
