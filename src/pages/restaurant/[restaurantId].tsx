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

const RestaurantId = () => {
  const [selectedTab, setSelectedTab] = React.useState('1');
  const handleSelectedTab = (event: any, newSelectedTab: string) => {
    setSelectedTab(newSelectedTab);
  };
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2} mb={3}>
          <RestaurantImageSlider />
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
                      <Tab label="Menu" value="3" sx={{ fontWeight: 900 }} />
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
                    <OverviewTitle>Some Restaurant name</OverviewTitle>
                    <Divider />
                    <RestaurantOverview />
                  </CardContent>
                </TabPanel>
                <TabPanel value="2">
                  <AdditionalInfo />
                </TabPanel>
                <TabPanel value="3">
                  <RestaurantMenu />
                </TabPanel>
                <TabPanel value="4">
                  <RestaurantReviews />
                </TabPanel>
                <TabPanel value="5">
                  <RestaurantPolicy />
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
