import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Rating,
  Skeleton,
} from '@mui/material';
import React from 'react';
import { Paragraph, SubtitleOverview } from './styles';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { AvaliabilityForm } from '../AvaliabilityForm';
import { FindReviewsByRestaurantByIdQuery, GetRestaurantByIdWithAllRelationsQuery } from '../../../../graphql/generated/schema';
import { RestaurantCategory } from '../Categories/utils';
import { DressCodePortuguese } from '../../../utils/dressCodeEnum';

type RestaurantOverviewProps = {
  data?: GetRestaurantByIdWithAllRelationsQuery;
  loading: boolean;
  reviewData?: FindReviewsByRestaurantByIdQuery;
};

export const RestaurantOverview = ({
  data,
  loading,
  reviewData
}: RestaurantOverviewProps) => {
  return (
    <Box mt={1}>
      {!loading ? (
        <>
          <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} sm={3} lg={3} xl={3}>
              <ListItem>
                {reviewData !== undefined && reviewData?.findAllReviewsByRestaurant?.average !== 0 ? (
                  <Rating name="read-only" value={reviewData?.findAllReviewsByRestaurant?.average} readOnly />

                ) : (
                  <Rating name="read-only" value={0} readOnly />
                )}
                <ListItemIcon sx={{ paddingLeft: '0.6rem' }}>
                  <Paragraph>{reviewData !== undefined && reviewData?.findAllReviewsByRestaurant?.average}</Paragraph>
                </ListItemIcon>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={3} lg={3} xl={3}>
              <ListItem>
                <ListItemIcon sx={{ paddingLeft: '1rem' }}>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <Paragraph>
                  {data !== undefined &&
                    data.getRestaurantByIdWithAllRelations.capacity}
                </Paragraph>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={3} lg={3} xl={3}>
              <ListItem>
                <ListItemIcon sx={{ paddingLeft: '1rem' }}>
                  <RestaurantIcon color="primary" />
                </ListItemIcon>
                <Paragraph>
                  {data !== undefined &&
                    RestaurantCategory[
                      `${data.getRestaurantByIdWithAllRelations.category}`
                    ]}
                </Paragraph>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={3} lg={3} xl={3}>
              <ListItem>
                <ListItemIcon sx={{ paddingLeft: '1rem' }}>
                  <CheckroomIcon color="primary" />
                </ListItemIcon>
                <Paragraph>
                  {data !== undefined &&
                    DressCodePortuguese[
                      `${data.getRestaurantByIdWithAllRelations.dressCode}`
                    ]}
                </Paragraph>
              </ListItem>
            </Grid>
          </Grid>
          <Box mt={1}>
            <Divider />
            <SubtitleOverview>Disponibilidade</SubtitleOverview>
            <AvaliabilityForm />
          </Box>
        </>
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Box>
  );
};
