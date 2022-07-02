import { Box, Grid, List, ListItem, ListItemIcon, Rating } from '@mui/material';
import React from 'react';
import { Paragraph } from './styles';
import ChatIcon from '@mui/icons-material/Chat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';

export const RestaurantOverview = () => {
  return (
    <Box mt={1}>
      <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <ListItem>
            <Rating name="read-only" value={4} readOnly />
            <ListItemIcon sx={{ paddingLeft: '0.6rem' }}>
              <Paragraph>4.2</Paragraph>
            </ListItemIcon>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <ListItem>
            <ListItemIcon sx={{ paddingLeft: '1rem' }}>
              <ChatIcon color="primary" />
            </ListItemIcon>
            <Paragraph>100</Paragraph>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <ListItem>
            <ListItemIcon sx={{ paddingLeft: '1rem' }}>
              <RestaurantIcon color="primary" />
            </ListItemIcon>
            <Paragraph>Brasileiro</Paragraph>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <ListItem>
            <ListItemIcon sx={{ paddingLeft: '1rem' }}>
              <CheckroomIcon color="primary" />
            </ListItemIcon>
            <Paragraph>Casual</Paragraph>
          </ListItem>
        </Grid>
      </Grid>
    </Box>
  );
};
