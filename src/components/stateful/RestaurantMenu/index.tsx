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

export const RestaurantMenu = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <Box>
      <TitleInfo>Menu</TitleInfo>
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
          <SwiperSlide key="1">
            <Card sx={{ maxWidth: 345 }} square>
              <CardMedia image="/food1.jpg" sx={{ height: 170 }} />
              <CardContent>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <ListItem>
                      <CardTitle>Salada</CardTitle>
                    </ListItem>
                    <ListItem>
                      <Paragraph>R$ 25,00</Paragraph>
                    </ListItem>
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onClick={handleOpen}
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide key="1">
            <Card sx={{ maxWidth: 345 }} square>
              <CardMedia image="/food1.jpg" sx={{ height: 170 }} />
              <CardContent>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <ListItem>
                      <CardTitle>Salada</CardTitle>
                    </ListItem>
                    <ListItem>
                      <Paragraph>R$ 25,00</Paragraph>
                    </ListItem>
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onClick={handleOpen}
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide key="1">
            <Card sx={{ maxWidth: 345 }} square>
              <CardMedia image="/food1.jpg" sx={{ height: 170 }} />
              <CardContent>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <ListItem>
                      <CardTitle>Salada</CardTitle>
                    </ListItem>
                    <ListItem>
                      <Paragraph>R$ 25,00</Paragraph>
                    </ListItem>
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onClick={handleOpen}
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide key="1">
            <Card sx={{ maxWidth: 345 }} square>
              <CardMedia image="/food1.jpg" sx={{ height: 170 }} />
              <CardContent>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <ListItem>
                      <CardTitle>Salada</CardTitle>
                    </ListItem>
                    <ListItem>
                      <Paragraph>R$ 25,00</Paragraph>
                    </ListItem>
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onClick={handleOpen}
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </CardContent>
      <MenuModal open={openModal} handleClose={handleClose} />
    </Box>
  );
};
