import React from 'react';
import { LocalizationProvider, MobileTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import brLocale from 'date-fns/locale/pt-BR';
import { Controller, useForm } from 'react-hook-form';
import { RestaurantCategories } from '../../../components/stateful/Categories/utils';
import { CreateButton } from '../../../styles/restaurant/create';
import useFormPersist from 'react-hook-form-persist';
import { ErrorText } from '../../../styles/global/styles';

export const UpdateRestaurantHours = () => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [hours, setHours] = React.useState({
    start_hour: '' as string | null,
    end_hour: '' as string | null,
    weekend_start_hour: '' as string | null,
    weekend_end_hour: '' as string | null,
    brunch_start_hour: '' as string | null,
    brunch_end_hour: '' as string | null,
    lunch_start_hour: '' as string | null,
    lunch_end_hour: '' as string | null,
    dinner_start_hour: '' as string | null,
    dinner_end_hour: '' as string | null,
    brunch_start_hour_weekend: '' as string | null,
    brunch_end_hour_weekend: '' as string | null,
    lunch_start_hour_weekend: '' as string | null,
    lunch_end_hour_weekend: '' as string | null,
    dinner_start_hour_weekend: '' as string | null,
    dinner_end_hour_weekend: '' as string | null,
    isAvaliableForBrunch: false,
    isAvaliableForLunch: false,
    isAvaliableForDinner: false,
  });

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControlLabel
            label="Disponível para café da manhã"
            control={
              <Controller
                name={'isAvailableForBrunch'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isAvaliableForBrunch: e.target.checked,
                      });
                      props.field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControlLabel
            label="Disponível para almoço"
            control={
              <Controller
                name={'isAvailableForLunch'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isAvaliableForLunch: e.target.checked,
                      });
                      props.field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControlLabel
            label="Disponível para jantar"
            control={
              <Controller
                name={'isAvailableForDinner'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isAvaliableForDinner: e.target.checked,
                      });
                      props.field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.brunch_start_hour}
              label="Horário inicial de café da manhã"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  brunch_start_hour: newValue,
                });
                setValue('brunch_start_hour', hours.brunch_start_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial de café da manhã"
                />
              )}
            />
          </LocalizationProvider>
          {errors.brunch_start_hour && errors.brunch_start_hour.message && (
            <ErrorText>{errors.brunch_start_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.brunch_end_hour}
              label="Horário final de café da manhã"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  brunch_end_hour: newValue,
                });
                setValue('brunch_end_hour', hours.brunch_end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final de café da manhã"
                />
              )}
            />
          </LocalizationProvider>
          {errors.brunch_end_hour && errors.brunch_end_hour.message && (
            <ErrorText>{errors.brunch_end_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.brunch_end_hour}
              label="Horário final de café da manhã"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  brunch_end_hour: newValue,
                });
                setValue('brunch_end_hour', hours.brunch_end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final de café da manhã"
                />
              )}
            />
          </LocalizationProvider>
          {errors.brunch_end_hour && errors.brunch_end_hour.message && (
            <ErrorText>{errors.brunch_end_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.brunch_start_hour_weekend}
              label="Horário inicial de café da manhã (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  brunch_start_hour_weekend: newValue,
                });
                setValue(
                  'brunch_start_hour_weekend',
                  hours.brunch_start_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial de café da manhã (Final de semana)"
                />
              )}
            />
            {errors.brunch_start_hour_weekend &&
              errors.brunch_start_hour_weekend.message && (
                <ErrorText>
                  {errors.brunch_start_hour_weekend.message}
                </ErrorText>
              )}
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.brunch_end_hour_weekend}
              label="Horário final de café da manhã (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  brunch_end_hour_weekend: newValue,
                });
                setValue(
                  'brunch_end_hour_weekend',
                  hours.brunch_end_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final de café da manhã (Final de semana)"
                />
              )}
            />
            {errors.brunch_end_hour_weekend &&
              errors.brunch_end_hour_weekend.message && (
                <ErrorText>{errors.brunch_end_hour_weekend.message}</ErrorText>
              )}
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.lunch_start_hour}
              label="Horário inicial do almoço"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  lunch_start_hour: newValue,
                });
                setValue('lunch_start_hour', hours.lunch_start_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial do almoço"
                />
              )}
            />
          </LocalizationProvider>
          {errors.lunch_start_hour && errors.lunch_start_hour.message && (
            <ErrorText>{errors.lunch_start_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.lunch_end_hour}
              label="Horário final do almoço"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  lunch_end_hour: newValue,
                });
                setValue('lunch_end_hour', hours.lunch_end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final do almoço"
                />
              )}
            />
          </LocalizationProvider>
          {errors.lunch_end_hour && errors.lunch_end_hour.message && (
            <ErrorText>{errors.lunch_end_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.lunch_start_hour_weekend}
              label="Horário inicial do almoço (Fim de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  lunch_start_hour_weekend: newValue,
                });
                setValue(
                  'lunch_start_hour_weekend',
                  hours.lunch_start_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial do almoço (Fim de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.lunch_start_hour_weekend &&
            errors.lunch_start_hour_weekend.message && (
              <ErrorText>{errors.lunch_start_hour_weekend.message}</ErrorText>
            )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.lunch_end_hour_weekend}
              label="Horário final do almoço (Fim de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  lunch_end_hour_weekend: newValue,
                });
                setValue(
                  'lunch_end_hour_weekend',
                  hours.lunch_end_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final do almoço (Fim de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.lunch_end_hour_weekend &&
            errors.lunch_end_hour_weekend.message && (
              <ErrorText>{errors.lunch_end_hour_weekend.message}</ErrorText>
            )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.dinner_start_hour}
              label="Horário inicial do jantar"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  dinner_start_hour: newValue,
                });
                setValue('dinner_start_hour', hours.dinner_start_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial do jantar"
                />
              )}
            />
          </LocalizationProvider>
          {errors.dinner_start_hour && errors.dinner_start_hour.message && (
            <ErrorText>{errors.dinner_start_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.dinner_end_hour}
              label="Horário final do jantar"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  dinner_end_hour: newValue,
                });
                setValue('dinner_end_hour', hours.dinner_end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário final do jantar"
                />
              )}
            />
          </LocalizationProvider>
          {errors.dinner_end_hour && errors.dinner_end_hour.message && (
            <ErrorText>{errors.dinner_end_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.dinner_start_hour_weekend}
              label="Horário inicial do jantar (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  dinner_start_hour_weekend: newValue,
                });
                setValue(
                  'dinner_start_hour_weekend',
                  hours.dinner_start_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário inicial do jantar (Final de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.dinner_start_hour_weekend &&
            errors.dinner_start_hour_weekend.message && (
              <ErrorText>{errors.dinner_start_hour_weekend.message}</ErrorText>
            )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.dinner_end_hour_weekend}
              label="Horário final do jantar (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  dinner_end_hour_weekend: newValue,
                });
                setValue(
                  'dinner_end_hour_weekend',
                  hours.dinner_end_hour_weekend,
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário fianl do jantar (Final de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.dinner_end_hour_weekend &&
            errors.dinner_end_hour_weekend.message && (
              <ErrorText>{errors.dinner_end_hour_weekend.message}</ErrorText>
            )}
        </Grid>
      </Grid>
    </form>
  );
};
