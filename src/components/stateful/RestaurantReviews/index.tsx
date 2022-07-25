import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  Rating,
} from '@mui/material';
import React from 'react';
import { FindReviewsByRestaurantByIdQuery } from '../../../../graphql/generated/schema';
import { Paragraph, TitleInfo } from '../AdditionalInfo/styles';
import { ParagraphReview } from './styles';

type RestaurantReviewsProps = {
  data: FindReviewsByRestaurantByIdQuery['findAllReviewsByRestaurant'];
  loading: boolean;
};
export const RestaurantReviews = ({
  data,
  loading,
}: RestaurantReviewsProps) => {
  return (
    <Box>
      <TitleInfo>Avaliações</TitleInfo>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card variant="outlined">
            <CardContent>
              <ListItem>
                <ListItemIcon>
                  <Paragraph>User Name</Paragraph>
                </ListItemIcon>
                <Rating value={4} readOnly sx={{ paddingLeft: '1.5rem' }} />
              </ListItem>
              <Divider />
              <ParagraphReview>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iste expedita quidem id sit tenetur culpa repellat
                consequatur fuga suscipit maxime, quia nulla dolorum quo. Hic
                consequuntur, incidunt et, accusantium tenetur odio quis ratione
                quo culpa est tempore delectus? Similique!
              </ParagraphReview>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
