import * as React from 'react';
import { PaperComponent } from '../../components/stateless/PaperComponent';
import { Layout } from '../../components/stateless/Layout';
import { TopBar } from '../../components/stateless/TopBar';
import { Banner } from '../../components/stateless/Banner';
import { Categories } from '../../components/stateful/Categories';
import { Box, Grid } from '@mui/material';
import { RestaurantCard } from '../../components/stateful/RestaurantCard';
import { CardTitle1 } from '../../styles/global/styles';
import {useRouter} from 'next/router';

const CategoryId = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Banner />
        <Categories />
        <Box mb={4}>
          <CardTitle1 variant="h1">Brasileiro</CardTitle1>
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

export default CategoryId