import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import React from 'react';
import { Paragraph, TitleInfo } from '../AdditionalInfo/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { CardTitle } from './styles';
import { MenuModal } from '../../stateless/MenuModal';
import { GetAllRestaurantMenusWithItemsQuery } from '../../../../graphql/generated/schema';

type RestaurantMenuProps = {
  data: any;
  loading: boolean;
};

export const RestaurantMenu = ({ data, loading }: RestaurantMenuProps) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);
  console.log(data)
  return (
    <Box>
      {data.getAllRestaurantMenusWithItems.map((menu: any) => (
        <>
          <TitleInfo>{menu.title}</TitleInfo>
          <CardContent>
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={10}
              modules={[Pagination]}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                928: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
            >
              {menu?.menuItem?.length ? (
                menu?.menuItem.map((item: any) => (
                  <>
                    <SwiperSlide key={item.id}>
                      <Card sx={{ maxWidth: 345, minHeight: 345}} square key={item.id}>
                        <CardMedia image={item.url} sx={{ height: 170 }} />
                        <CardContent>
                          <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <ListItem>
                                <CardTitle>{item.name}</CardTitle>
                              </ListItem>
                              <ListItem>
                                <Paragraph>R$ {item.price}</Paragraph>
                              </ListItem>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </>
                ))
              ) : (
                <h3>Não há itens no menu</h3>
              )}
            </Swiper>
          </CardContent>
        </>
      ))}
    </Box>
  );
};
