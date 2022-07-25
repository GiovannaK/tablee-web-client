import { Box, Card, CardContent, Divider, Grid, Tab } from '@mui/material';
import React from 'react';
import { Layout } from '../../components/stateless/Layout';
import { PaperComponent } from '../../components/stateless/PaperComponent';
import { TopBar } from '../../components/stateless/TopBar';
import { RestaurantImageSlider } from '../../components/stateful/RestaurantImageSlider';
import { RestaurantOverview } from '../../components/stateful/RestaurantOverview';
import { OverviewTitle } from '../../styles/restaurant/styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBarComponent } from '../../components/stateless/AppBarCustom/styles';
import { RestaurantMenu } from '../../components/stateful/RestaurantMenu';
import { AdditionalInfo } from '../../components/stateful/AdditionalInfo';
import { RestaurantReviews } from '../../components/stateful/RestaurantReviews';
import { RestaurantPolicy } from '../../components/stateful/RestaurantPolicy';
import { useRouter } from 'next/router';
import {
  useFindReviewsByRestaurantByIdQuery,
  useGetAllRestaurantMenusWithItemsQuery,
  useGetRestaurantByIdWithAllRelationsQuery,
} from '../../../graphql/generated/schema';
import { toast } from 'react-toastify';

const RestaurantId = () => {
  const [selectedTab, setSelectedTab] = React.useState('1');
  const handleSelectedTab = (event: any, newSelectedTab: string) => {
    setSelectedTab(newSelectedTab);
  };
  const router = useRouter();
  const { restaurantId } = router.query as any;

  const { data, loading, error } = useGetRestaurantByIdWithAllRelationsQuery({
    variables: {
      id: restaurantId || '',
      relations: ['address', 'restaurantImage', 'cancellationPolicy'],
    },
    skip: !restaurantId,
  });
  const {
    data: menuData,
    loading: menuLoading,
    error: menuError,
  } = useGetAllRestaurantMenusWithItemsQuery({
    variables: {
      restaurantId: restaurantId || '',
    },
    skip: !restaurantId,
  });

  const {
    data: dataReview,
    loading: loadingReview,
    error: errorReview,
  } = useFindReviewsByRestaurantByIdQuery({
    variables: {
      restaurantId: restaurantId || '',
    },
    skip: !restaurantId,
  });

  if (error) {
    toast.error('Ocorreu um erro ao carregar os dados do restaurante.');
  }

  if (menuError) {
    toast.error('Ocorreu um erro ao carregar os dados do menu.');
  }

  if (errorReview && dataReview?.findAllReviewsByRestaurant) {
    toast.error('Ocorreu um erro ao carregar os dados de avaliações.');
    console.log(errorReview);
  }

  console.log('MENU', menuData);

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2} mb={3}>
          <RestaurantImageSlider data={data} loading={loading} />
          <Grid item xs={12} sm={12} lg={12} xl={12} sx={{ maxHeight: '85vh' }}>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
              }}
            >
              <TabContext value={selectedTab}>
                <AppBarComponent position="static">
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <TabList
                      onChange={handleSelectedTab}
                      variant="scrollable"
                      scrollButtons="auto"
                    >
                      <Tab
                        label="Overview"
                        value="1"
                        sx={{ fontWeight: 900 }}
                      />
                      <Tab
                        label="Informações Adicionais"
                        value="2"
                        sx={{ fontWeight: 900 }}
                      />
                      {menuData?.getAllRestaurantMenusWithItems.length && (
                        <Tab label="Menu" value="3" sx={{ fontWeight: 900 }} />
                      )}
                      <Tab label="Reviews" value="4" sx={{ fontWeight: 900 }} />
                      <Tab
                        label="Políticas do Restaurante"
                        value="5"
                        sx={{ fontWeight: 900 }}
                      />
                    </TabList>
                  </Box>
                </AppBarComponent>
                <TabPanel value="1" sx={{ marginBottom: '1rem' }}>
                  <CardContent sx={{ width: '100%' }}>
                    <OverviewTitle>
                      {data?.getRestaurantByIdWithAllRelations &&
                        data.getRestaurantByIdWithAllRelations.name}
                    </OverviewTitle>
                    <Divider />
                    <RestaurantOverview data={data} loading={loading} />
                  </CardContent>
                </TabPanel>
                <TabPanel value="2">
                  <AdditionalInfo data={data} loading={loading} />
                </TabPanel>
                <TabPanel value="3">
                  <RestaurantMenu data={menuData} loading={menuLoading} />
                </TabPanel>
                <TabPanel value="4">
                  <RestaurantReviews
                    data={dataReview}
                    loading={loadingReview}
                  />
                </TabPanel>
                <TabPanel value="5">
                  <RestaurantPolicy data={data} loading={loading} />
                </TabPanel>
              </TabContext>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </PaperComponent>
  );
};

export default RestaurantId;
