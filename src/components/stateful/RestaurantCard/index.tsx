import { CardContent, CardActionArea, Grid, Rating } from '@mui/material';
import React from 'react';
import {
  CardMediaStyled,
  CardStyled,
  CategoryTitle,
  IsOpen,
  SubTitle,
  Title,
} from './styles';

export const RestaurantCard = () => {
  return (
    <CardActionArea
    >
      <CardStyled square>
        <CardMediaStyled image="restaurant.png" />
        <CardContent>
          <Title variant="h5">Restaurant 1</Title>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <SubTitle>São Paulo</SubTitle>
            </Grid>
            <Grid item xs={6}>
              <CategoryTitle>Grill</CategoryTitle>
            </Grid>
            <Grid item xs={6}>
              <Rating value={5} readOnly />
            </Grid>
            <Grid item xs={6}>
              <IsOpen>Aberto</IsOpen>
            </Grid>
          </Grid>
        </CardContent>
      </CardStyled>
    </CardActionArea>
  );
};
