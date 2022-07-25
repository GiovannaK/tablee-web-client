import {
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemIcon,
  Skeleton,
} from '@mui/material';
import React from 'react';
import { Paragraph } from '../AdditionalInfo/styles';
import { Paragraph2 } from '../BookingForm/styles';
import { CardTitle } from '../RestaurantMenu/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { GetRestaurantByIdWithAllRelationsQuery } from '../../../../graphql/generated/schema';

type RestaurantPolicyProps = {
  data?: GetRestaurantByIdWithAllRelationsQuery;
  loading: boolean;
};

export const RestaurantPolicy = ({ data, loading }: RestaurantPolicyProps) => {
  return (
    <Box>
      {!loading ? (
        <Card variant="outlined">
          <CardContent sx={{ maxHeight: '50vh', overflowY: 'auto' }}>
            <CardTitle
              sx={{
                fontSize: '1.4rem',
                textAlign: 'center',
                paddingBottom: '1.3rem',
              }}
            >
              Políticas do Restaurante
            </CardTitle>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>
                {`Data limite de cancelamento de ${
                  data?.getRestaurantByIdWithAllRelations.cancellationPolicy
                    ?.limitDaysToCancel
                } ${
                  data?.getRestaurantByIdWithAllRelations.cancellationPolicy
                    ?.limitDaysToCancel === 1
                    ? 'dia'
                    : 'dias'
                } antes da data da reserva.`}
              </Paragraph>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon color="secondary" />
              </ListItemIcon>
              <Paragraph>
                {`Valor da taxa de cancelamento - R$ ${data?.getRestaurantByIdWithAllRelations.cancellationPolicy?.tax}`}
              </Paragraph>
            </ListItem>
            <Paragraph2>
              {
                data?.getRestaurantByIdWithAllRelations?.cancellationPolicy
                  ?.details
              }
            </Paragraph2>
          </CardContent>
        </Card>
      ) : (
        <>
          <Skeleton height="10vh" />
          <Skeleton height="10vh" />
        </>
      )}
    </Box>
  );
};
