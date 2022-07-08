import { Box, Grid } from '@mui/material';
import React from 'react';
import { UserBookingCard } from '../../stateful/UserBookingCard';

export const UserBookingPanel = () => {
  return (
    <Box mt={2}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <UserBookingCard />
        </Grid>
      </Grid>
    </Box>
  )
};
