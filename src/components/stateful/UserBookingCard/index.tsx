import { Box, CardContent, Divider, Grid, ListItem, ListItemIcon } from '@mui/material';
import React from 'react';
import { CardBooking, CardBookingParagraph, CardBox, CardStatus } from './styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CakeIcon from '@mui/icons-material/Cake';
import HttpsIcon from '@mui/icons-material/Https';
import TableBarIcon from '@mui/icons-material/TableBar';

type BookingCardProps = {
  pending?: string;
  approved?: string;
  progress?: string;
  rejected?: string;
  finished?: string;
  canceled?: string;
  all?: string;
};

export const UserBookingCard: React.FC<BookingCardProps> = () => {
  return (
    <CardBooking>
      <CardBox pending="true"></CardBox>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListItem>
              <ListItemIcon>
                <RestaurantIcon color="primary" />
              </ListItemIcon>
              <CardBookingParagraph>Some Restaurant Name</CardBookingParagraph>
            </ListItem>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon><CalendarTodayIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph>20/08/2022</CardBookingParagraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon><AccessTimeIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph>20:00</CardBookingParagraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <ListItem>
              <ListItemIcon><PeopleAltIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph>8</CardBookingParagraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <ListItem>
              <ListItemIcon><CakeIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph>Aniversário</CardBookingParagraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListItem>
              <ListItemIcon><HttpsIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph sx={{fontSize: '1.3rem'}}>AXF567</CardBookingParagraph>
            </ListItem>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListItem>
              <ListItemIcon><TableBarIcon color="primary"/></ListItemIcon>
              <CardBookingParagraph>Interna | Externa | Bar</CardBookingParagraph>
            </ListItem>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListItem sx={{display: 'flex', justifyContent: 'center'}}>
              <CardStatus pending="true">Pendente</CardStatus>
            </ListItem>
          </Grid>
        </Grid>
      </CardContent>
    </CardBooking>
  );
};
