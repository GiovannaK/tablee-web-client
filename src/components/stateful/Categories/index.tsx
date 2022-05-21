import { Box, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { enumMapper } from '../../../utils/enumMapper';
import { CategoryTitle, CustomCard } from './styles';
import { RestaurantCategories } from './utils';

export const Categories = () => {
  return (
    <Box mt={3}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Swiper
            spaceBetween={25}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              928: {
                slidesPerView: 3.5,
                slidesPerGroup: 3,
              },
            }}
          >
            {RestaurantCategories.map((category) => (
              <SwiperSlide key={category.id}>
                <CustomCard key={category.id}>
                  <CardContent>
                    <CategoryTitle>{category.name}</CategoryTitle>
                  </CardContent>
                </CustomCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};
