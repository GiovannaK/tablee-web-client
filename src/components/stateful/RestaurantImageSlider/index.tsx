import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetRestaurantByIdWithAllRelationsQuery } from '../../../../graphql/generated/schema';

type RestaurantImageSliderProps = {
  data?: GetRestaurantByIdWithAllRelationsQuery;
  loading: boolean;
};

export const RestaurantImageSlider = ({
  data,
  loading,
}: RestaurantImageSliderProps) => {
  return (
    <Grid item xs={12} sm={12} lg={12} xl={12} sx={{ maxHeight: '85vh' }}>
      {!loading ? (
        <Swiper pagination={{ clickable: true }} navigation>
          {data !== undefined &&
          data?.getRestaurantByIdWithAllRelations?.restaurantImage?.length ? (
            data?.getRestaurantByIdWithAllRelations?.restaurantImage?.map(
              (image) => (
                <SwiperSlide key={image.url}>
                  <img
                    src={image.url}
                    style={{
                      width: '100%',
                      height: '50vh',
                      filter: 'brightness(0.7)',
                    }}
                  />
                </SwiperSlide>
              )
            )
          ) : (
            <SwiperSlide key={data?.getRestaurantByIdWithAllRelations.thumbUrl}>
              <img
                src={data?.getRestaurantByIdWithAllRelations.thumbUrl}
                style={{
                  width: '100%',
                  height: '50vh',
                  filter: 'brightness(0.7)',
                }}
              />
            </SwiperSlide>
          )}
        </Swiper>
      ) : (
        <Skeleton height="50vh"/>
      )}
    </Grid>
  );
};
