import { CardContent, CardActionArea, Grid, Rating } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { ListAllRestaurantsQuery } from '../../../../graphql/generated/schema';
import { RestaurantCategory } from '../Categories/utils';
import {
  CardMediaStyled,
  CardStyled,
  CategoryTitle,
  IsOpen,
  SubTitle,
  Title,
} from './styles';

type RestaurantCardProps = {
  restaurant: ListAllRestaurantsQuery['listAllRestaurants'][0];
};

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link href="/restaurant/38348438">
      <CardActionArea>
        <CardStyled square>
          <CardMediaStyled image={restaurant.thumbUrl} />
          <CardContent>
            <Title variant="h5">{restaurant.name}</Title>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <SubTitle>
                  {restaurant.address && restaurant.address.city}
                </SubTitle>
              </Grid>
              <Grid item xs={6}>
                <CategoryTitle>
                  {RestaurantCategory[`${restaurant.category}`]}
                </CategoryTitle>
              </Grid>
              <Grid item xs={6}>
                <Rating value={5} readOnly />
              </Grid>
              <Grid item xs={6}>
                <IsOpen>{restaurant.isOpen ? 'Aberto' : 'Fechado'}</IsOpen>
              </Grid>
            </Grid>
          </CardContent>
        </CardStyled>
      </CardActionArea>
    </Link>
  );
};
