import {
  LocalizationProvider,
  MobileDatePicker,
  MobileTimePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  Box,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import brLocale from 'date-fns/locale/pt-BR';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorText, InputOulinedLabel } from '../../../styles/global/styles';
import { AvaliabilityFormButton } from './styles';

export const AvaliabilityForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const [date, setDate] = React.useState<Date | null>(null);
  const [hour, setHour] = React.useState<string | null>(null);

  const dateValue = getValues('date') as Date;
  const hourValue = getValues('hour') as Date;

  React.useEffect(() => {
    register('date');
    register('hour');
  }, [register]);
  React.useEffect(() => {
    setDate(dateValue || null);
  }, [setDate, dateValue]);
  React.useEffect(() => {
    setDate(hourValue || null);
  }, [setDate, hourValue]);

  return (
    <Box mt={2}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <InputOulinedLabel htmlFor="date">Data</InputOulinedLabel>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={brLocale}
            >
              <MobileDatePicker
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                  setValue('date', date, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    fullWidth
                    placeholder="Selecione a data da reserva"
                  />
                )}
              />
            </LocalizationProvider>
            {/* {errors.date && errors.date.message && (
            <FormError>{errors.date.message}</FormError>
          )} */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <InputOulinedLabel htmlFor="hour">Horário</InputOulinedLabel>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={brLocale}
            >
              <MobileTimePicker
                value={hour}
                onChange={(newValue) => {
                  setHour(newValue);
                  setValue('date', date, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    fullWidth
                    placeholder="Selecione o horário da reserva"
                  />
                )}
              />
            </LocalizationProvider>
            {errors.date && errors.date.message && (
              <ErrorText>{errors.date.message}</ErrorText>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>Mesa para quantos?</InputOulinedLabel>
            <Select
              fullWidth
              // disabled={isLoading}
              defaultValue=""
              inputProps={{
                ...register('partyFor', {
                  required: 'Mesa para quantos é requerida',
                }),
              }}
              placeholder="Mesa para quantos..."
            >
              {/* {data &&
              data.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.title}
                </MenuItem>
              ))} */}
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
            {errors.partyFor && errors.partyFor.message && (
              <ErrorText>{errors.partyFor.message}</ErrorText>
            )}
          </Grid>
        </Grid>
        <AvaliabilityFormButton variant="contained">Verificar Disponibilidade</AvaliabilityFormButton>
      </form>
    </Box>
  );
};
