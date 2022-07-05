import { Box, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { BookingForm } from '../../../components/stateful/BookingForm';
import {
  CardTitleBooking,
  Paragraph2,
} from '../../../components/stateful/BookingForm/styles';
import { Layout } from '../../../components/stateless/Layout';
import { PaperComponent } from '../../../components/stateless/PaperComponent';
import { TopBar } from '../../../components/stateless/TopBar';

const MakeBooking = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Faça uma reserva">
        <Box mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <BookingForm />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default MakeBooking;
