import { Box, Card, CardContent, ListItem, ListItemIcon } from '@mui/material';
import React from 'react';
import { Paragraph } from '../AdditionalInfo/styles';
import { Paragraph2 } from '../BookingForm/styles';
import { CardTitle } from '../RestaurantMenu/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const RestaurantPolicy = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent sx={{maxHeight: '50vh', overflowY: 'auto'}}>
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
              Data limite de cancelamento de 1 dia antes da data da reserva
            </Paragraph>
          </ListItem>
          <Paragraph2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            accusamus voluptatem saepe error excepturi ea tempora, aut illum!
            Suscipit facilis aut, quas quis ut dolor quisquam consequuntur quasi
            iusto perspiciatis animi repellendus. Assumenda nemo laudantium
            quam. Rem temporibus natus ipsam accusamus odio, hic sequi minus
            nihil ut consequatur nostrum, eligendi reiciendis unde obcaecati,
            rerum tempore atque laboriosam. Inventore, quidem dolore. Eaque
            numquam iste ipsa voluptatem! A recusandae nam id ipsa esse fugit,
            perferendis repellendus ex, modi aperiam nemo dolor. Dicta beatae
            reprehenderit quos quae repellendus sit non id voluptatum aliquid
            recusandae quasi accusamus neque quia enim similique officiis aut
            velit, inventore maiores laboriosam, explicabo assumenda earum
            veritatis ipsa! Dicta et quas pariatur necessitatibus ut omnis
            provident blanditiis neque minus inventore accusamus ipsum
            accusantium sunt facilis, facere quo ex? Provident doloribus id illo
            voluptatem aut neque fugiat aliquam? Quibusdam voluptatem aut nisi
            dolorum magni obcaecati dicta beatae pariatur hic porro nulla
            consequuntur optio ratione debitis cumque, eos eveniet sit atque
            architecto repellat? Dolore sint molestias voluptas officiis nihil
            optio distinctio veniam quam expedita voluptate maxime ad ipsa velit
            vel cupiditate doloribus praesentium, adipisci atque incidunt
            numquam natus quas dignissimos consectetur! Deleniti, ipsa eligendi?
            Deserunt doloremque cumque, cupiditate illum assumenda eum ipsum!
          </Paragraph2>
        </CardContent>
      </Card>
    </Box>
  );
};
