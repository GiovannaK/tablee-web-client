import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  Rating,
  Skeleton,
  Toolbar,
} from '@mui/material';
import React from 'react';
import { FindReviewsByRestaurantByIdQuery } from '../../../../graphql/generated/schema';
import { Paragraph, TitleInfo } from '../AdditionalInfo/styles';
import { ParagraphReview } from './styles';

type RestaurantReviewsProps = {
  data?: FindReviewsByRestaurantByIdQuery;
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
        {!loading ? (
          data !== undefined &&
          data?.findAllReviewsByRestaurant?.reviews?.length ? (
            data.findAllReviewsByRestaurant.reviews.map((review) => (
              <>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Card variant="outlined">
                    <CardContent>
                      <ListItem>
                        <ListItemIcon>
                          <Paragraph>
                            {review.user && review.user?.firstName}
                          </Paragraph>
                        </ListItemIcon>
                        <Rating
                          value={review.rating}
                          readOnly
                          sx={{ paddingLeft: '1.5rem' }}
                        />
                      </ListItem>
                      <Divider />
                      <ParagraphReview>{review.comment}</ParagraphReview>
                    </CardContent>
                  </Card>
                </Grid>
                <Toolbar />
              </>
            ))
          ) : (
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign: "center"}}>
                <Paragraph sx={{ textAlign: 'center', fontSize: '1.22rem' }}>
                  Nenhuma avaliação encontrada!
                </Paragraph>
                <img
                  src="../review.svg"
                  style={{ maxWidth: '35%'}}
                />
              </Grid>
            </Grid>
          )
        ) : (
          <>
            <Skeleton height="40px" width="100%" />
            <Skeleton height="40px" width="100%" />
            <Skeleton height="40px" width="100%" />
          </>
        )}
      </Grid>
    </Box>
  );
};
