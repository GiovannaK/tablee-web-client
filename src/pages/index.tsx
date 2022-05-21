import * as React from 'react';
import Container from '@mui/material/Container';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { Layout } from '../components/stateless/Layout';
import { TopBar } from '../components/stateless/TopBar';
import { Banner } from '../components/stateless/Banner';
import { Categories } from '../components/stateful/Categories';
import { Box, Grid } from '@mui/material';
import { RestaurantCard } from '../components/stateful/RestaurantCard';

export default function Index() {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Banner />
        <Categories />
        <Box mt={4} mb={4}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
            <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
              <RestaurantCard />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
}
