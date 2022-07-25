import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  Skeleton,
} from '@mui/material';
import React from 'react';
import { Paragraph, TitleInfo } from './styles';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import { GetRestaurantByIdWithAllRelationsQuery } from '../../../../graphql/generated/schema';

type AdditionalInfoProps = {
  data?: GetRestaurantByIdWithAllRelationsQuery;
  loading: boolean;
};
export const AdditionalInfo = ({ data, loading }: AdditionalInfoProps) => {
  return (
    <Box>
      <TitleInfo>Informações Adicionais</TitleInfo>
      <Divider />
      {!loading ? (
        <Grid container mt={2} spacing={1.4}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>
                {data !== undefined &&
                  `${data.getRestaurantByIdWithAllRelations.address?.street}, ${data.getRestaurantByIdWithAllRelations.address?.number}, ${data.getRestaurantByIdWithAllRelations.address?.city}, ${data.getRestaurantByIdWithAllRelations.address?.state}`}
              </Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <LocalParkingIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>
                {data !== undefined &&
                data.getRestaurantByIdWithAllRelations.isParking === true
                  ? 'Estacionamento Disponível'
                  : 'Estacionamento Indisponível'}
              </Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>(11) 30386545</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <CreditCardIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Visa, Mastercard, AMEX, Dinheiro.</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Segunda à Sexta - 09:00 às 23:00</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Sábado e Domingo - 12:00 às 23:00</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Café da Manhã - 09:00 às 12:00</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Almoço - 12:00 às 16:00</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Jantar - 18:00 às 23:00</Paragraph>
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListItem>
              <ListItemIcon>
                <PeopleIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>Capacidade - 100 pessoas</Paragraph>
            </ListItem>
          </Grid>
        </Grid>
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
