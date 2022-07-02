import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Rating,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Layout } from '../../components/stateless/Layout';
import { PaperComponent } from '../../components/stateless/PaperComponent';
import { TopBar } from '../../components/stateless/TopBar';
import {
  CardTitle1,
  InputAccess,
  FullWidthButton,
  CardTitle2,
  ErrorText,
  GoogleButton,
  InputTexFieldAccess,
} from '../../styles/global/styles';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RestaurantImageSlider } from '../../components/stateful/RestaurantImageSlider';
import { AppBarCustom } from '../../components/stateless/AppBarCustom';
import { RestaurantOverview } from '../../components/stateful/RestaurantOverview';

const RestaurantId = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2}>
          <RestaurantImageSlider />
          <Grid item xs={12} sm={12} lg={12} xl={12} sx={{ maxHeight: '85vh' }}>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
              }}
            >
              <AppBarCustom />
              <CardContent sx={{ width: '100%' }}>
                <CardTitle1>Some Restaurant name</CardTitle1>
                <Divider />
                <RestaurantOverview />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </PaperComponent>
  );
};

export default RestaurantId;
