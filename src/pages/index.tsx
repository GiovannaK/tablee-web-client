import * as React from 'react';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { Layout } from '../components/stateless/Layout';
import { TopBar } from '../components/stateless/TopBar';
import { Banner } from '../components/stateless/Banner';
import { Categories } from '../components/stateful/Categories';
import { Box, Button, Grid, Skeleton } from '@mui/material';
import { RestaurantCard } from '../components/stateful/RestaurantCard';
import { useListAllRestaurantsQuery } from '../../graphql/generated/schema';
import { toast } from 'react-toastify';
import { NoRestaurantsFound } from '../components/stateless/NoRestaurantsFound';

export default function Index() {
  const [page, setPage] = React.useState(0);
  const pageSize = 1;
  const { data, loading, error, fetchMore } = useListAllRestaurantsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: 0,
      take: pageSize,
    },
  });

  if (error) {
    toast.error('Não foi possível carregar os restaurantes');
  }

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Banner />
        <Categories />
        <Box mt={4} mb={4}>
          <Grid container spacing={2} justifyContent="center">
            {data?.listAllRestaurants.length ? (
              data?.listAllRestaurants?.map((restaurant) => (
                <Grid item xs={11} sm={6} md={4} lg={3} xl={3}>
                  {loading ? (
                    <>
                      <Skeleton height="370px" width="100%" />
                    </>
                  ) : (
                    <RestaurantCard restaurant={restaurant} />
                  )}
                </Grid>
              ))
            ) : (
              <NoRestaurantsFound />
            )}
            {data?.listAllRestaurants.length && (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                <Button
                  variant="contained"
                  sx={{ width: '100%', fontSize: '1.1rem', fontWeight: 700 }}
                  onClick={async () => {
                    const currentLength = data?.listAllRestaurants?.length || 0;
                    console.log(currentLength);
                    await fetchMore({
                      variables: {
                        skip: currentLength,
                        limit: currentLength * 2,
                      },
                    });
                  }}
                >
                  Carregar mais
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
}
