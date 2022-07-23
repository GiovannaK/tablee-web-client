import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Grid, Tab } from '@mui/material';
import React from 'react';
import { AppBarComponent } from '../components/stateless/AppBarCustom/styles';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import { UserBookingPanel } from '../components/stateless/UserBookingPanel';
import { CustomTab } from '../styles/bookings/styles';

type BookingProps = {
  pending?: string;
  approved?: string;
  progress?: string;
  rejected?: string;
  finished?: string;
  canceled?: string;
  all?: string;
};

const Bookings: React.FC<BookingProps> = () => {
  const [selectedTab, setSelectedTab] = React.useState('1');
  const handleSelectedTab = (event: any, newSelectedTab: string) => {
    setSelectedTab(newSelectedTab);
  };
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee | Minhas reservas">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabContext value={selectedTab}>
              <AppBarComponent
                sx={{ position: 'fixed', width: '100%', top: '7vh' }}
              >
                <Container maxWidth="xl">
                  <TabList
                    onChange={handleSelectedTab}
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <CustomTab label="Todas as Reservas" all="true" value="1" />
                    <CustomTab label="Pendente" pending="true" value="2" />
                    <CustomTab label="Aprovada" approved="true" value="3" />
                    <CustomTab
                      label="Transcorrendo"
                      progress="true"
                      value="4"
                    />
                    <CustomTab label="Rejeitada" rejected="true" value="5" />
                    <CustomTab label="Finalizada" finished="true" value="6" />
                    <CustomTab label="Cancelada" canceled="true" value="7" />
                  </TabList>
                </Container>
              </AppBarComponent>
              <TabPanel value="1">
                <UserBookingPanel />
              </TabPanel>
              <TabPanel value="2">
                <h1>Pending</h1>
              </TabPanel>
              <TabPanel value="3">
                <h1>Approved</h1>
              </TabPanel>
              <TabPanel value="4">
                <h1>Progress</h1>
              </TabPanel>
              <TabPanel value="5">
                <h1>Rejected</h1>
              </TabPanel>
              <TabPanel value="6">
                <h1>Finished</h1>
              </TabPanel>
              <TabPanel value="7">
                <h1>Canceled</h1>
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Layout>
    </PaperComponent>
  );
};

export default Bookings;
