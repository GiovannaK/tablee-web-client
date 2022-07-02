import { Grid } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const RestaurantImageSlider = () => {
  return (
    <Grid item xs={12} sm={12} lg={12} xl={12} sx={{ maxHeight: '85vh' }}>
      <Swiper pagination={{ clickable: true }} navigation>
        <SwiperSlide key="1">
          <img
            src="/restaurant.png"
            style={{
              width: '100%',
              height: '50vh',
              filter: 'brightness(0.7)',
            }}
          />
        </SwiperSlide>
        <SwiperSlide key="3">
          <img
            src="/restaurant.png"
            style={{
              width: '100%',
              height: '50vh',
              filter: 'brightness(0.7)',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};
