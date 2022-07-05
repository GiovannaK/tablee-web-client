import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid,
  Hidden,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import { BookingFormButton, CardTitleBooking, Paragraph } from './styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import { Controller, useForm } from 'react-hook-form';
import { ErrorText, InputOulinedLabel } from '../../../styles/global/styles';
import { specialDate } from './utils/specialDate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const BookingForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const [tables, setTables] = React.useState({
    internal: false,
    external: false,
    bar: false,
  });

  return (
    <Box>
      <Card square>
        <CardContent>
          <Card elevation={0}>
            <CardContent>
              <Grid container spacing={2} justifyContent="center">
                <Hidden mdDown>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <CardMedia
                      image="../../restaurant.png"
                      component="img"
                      sx={{ height: 200 }}
                    />
                  </Grid>
                </Hidden>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <CardTitleBooking>Some Restaurant Name</CardTitleBooking>
                  <Grid container mt={1}>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                      <ListItem>
                        <ListItemIcon>
                          <CalendarTodayIcon color="secondary" />
                        </ListItemIcon>
                        <Paragraph>29/08/2022</Paragraph>
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                      <ListItem>
                        <ListItemIcon>
                          <AccessTimeIcon color="secondary" />
                        </ListItemIcon>
                        <Paragraph>20:00</Paragraph>
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                      <ListItem>
                        <ListItemIcon>
                          <PeopleIcon color="secondary" />
                        </ListItemIcon>
                        <Paragraph>8 pessoas</Paragraph>
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                      <ListItem>
                        <ListItemIcon>
                          <AttachMoneyIcon color="secondary" />
                        </ListItemIcon>
                        <Paragraph>
                          Cancele até 26/08/2022 e não pague taxa
                        </Paragraph>
                      </ListItem>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <InputOulinedLabel>
                      DATA ESPECIAL (OPCIONAL)
                    </InputOulinedLabel>
                    <Select
                      fullWidth
                      // disabled={isLoading}
                      defaultValue=""
                      inputProps={{
                        ...register('specialDate'),
                      }}
                      placeholder="Data Especial (Opcional)"
                    >
                      {specialDate.map((date) => (
                        <MenuItem key={date.id} value={date.name}>
                          {date.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.specialDate && errors.specialDate.message && (
                      <ErrorText>{errors.specialDate.message}</ErrorText>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <InputOulinedLabel>
                      PREFERÊNCIA DE MESAS (OPCIONAL)
                    </InputOulinedLabel>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          label="Interna"
                          control={
                            <Controller
                              name={'INTERNA'}
                              control={control}
                              render={(props) => (
                                <Checkbox
                                  {...props}
                                  checked={props.field.value}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setTables({
                                      ...tables,
                                      internal: e.target.checked,
                                    });
                                    props.field.onChange(e.target.checked);
                                  }}
                                />
                              )}
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          label="Externa"
                          control={
                            <Controller
                              name={'EXTERNA'}
                              control={control}
                              render={(props) => (
                                <Checkbox
                                  {...props}
                                  checked={props.field.value}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setTables({
                                      ...tables,
                                      external: e.target.checked,
                                    });
                                    props.field.onChange(e.target.checked);
                                  }}
                                />
                              )}
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          label="Bar"
                          control={
                            <Controller
                              name={'BAR'}
                              control={control}
                              render={(props) => (
                                <Checkbox
                                  {...props}
                                  checked={props.field.value}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setTables({
                                      ...tables,
                                      bar: e.target.checked,
                                    });
                                    props.field.onChange(e.target.checked);
                                  }}
                                />
                              )}
                            />
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <InputOulinedLabel>
                      OBSERVAÇÕES (OPCIONAL)
                    </InputOulinedLabel>
                    <TextField
                      multiline
                      rows={5}
                      fullWidth
                      placeholder="Observações (Opcional)"
                      {...register('extras', {
                        maxLength: 5000,
                      })}
                    />
                    {errors.extras && errors.extras.message && (
                      <ErrorText>{errors.extras.message}</ErrorText>
                    )}
                  </Grid>
                </Grid>
                <BookingFormButton variant="contained">
                  Fazer Reserva
                </BookingFormButton>
              </form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
};
