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
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RestaurantCategories } from '../../../components/stateful/Categories/utils';
import { CreateButton } from '../../../styles/restaurant/create';
import useFormPersist from 'react-hook-form-persist';
import { ErrorText } from '../../../styles/global/styles';

type CreateRestaurantFormProps = {
  hours: any;
  setHours: any;
};

export const CreateRestaurantForm = ({
  hours,
  setHours,
}: CreateRestaurantFormProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm();

  if (typeof window !== 'undefined') {
    useFormPersist('basicData', {
      watch,
      setValue,
      storage: window.localStorage,
    });
  }

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField
            label="Nome do restaurante"
            {...register('name', {
              required: 'Nome do restaurante é requerido',
              maxLength: 200,
            })}
            fullWidth
          />
          {errors.name && errors.name.message && (
            <ErrorText>{errors.name.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="CNPJ"
            {...register('cnpj', {
              required: 'CNPJ é requerido',
              maxLength: 14,
            })}
            fullWidth
          />
          {errors.cnpj && errors.cnpj.message && (
            <ErrorText>{errors.cnpj.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="E-mail"
            fullWidth
            {...register('email', {
              required: 'E-mail é requerido',
              maxLength: 14,
            })}
          />
          {errors.email && errors.email.message && (
            <ErrorText>{errors.email.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="Número de telefone principal"
            {...register('mainPhone', {
              required: 'Telefone principal é requerido',
              maxLength: 11,
            })}
            fullWidth
          />
          {errors.mainPhone && errors.mainPhone.message && (
            <ErrorText>{errors.mainPhone.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="Número de telefone secundário"
            {...register('secondaryPhone', {
              maxLength: 11,
            })}
            fullWidth
            required={false}
          />
          {errors.secondaryPhone && errors.secondaryPhone.message && (
            <ErrorText>{errors.secondaryPhone.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="Capacidade de pessoas"
            fullWidth
            {...register('capacity', {
              pattern: {
                value: /^-?[0-9]\d*\.?\d*$/,
                message: 'Número inválido',
              },
              required: 'Capacidade de pessoas é requerida',
            })}
          />
          {errors.capacity && errors.capacity.message && (
            <ErrorText>{errors.capacity.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="category">Categoria</InputLabel>
            <Select
              labelId="category"
              name="category"
              fullWidth
              label="Categoria"
              defaultValue=""
              inputProps={{
                ...register('category', {
                  required: 'Categoria é requerida',
                }),
              }}
            >
              {RestaurantCategories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.category && errors.category.message && (
            <ErrorText>{errors.category.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            label="Máximo de convidados por reserva"
            fullWidth
            {...register('maxGuestQuantity', {
              pattern: {
                value: /^-?[0-9]\d*\.?\d*$/,
                message: 'Número inválido',
              },
              required: 'Máximo de convidados por reserva é requerido',
            })}
          />
          {errors.maxGuestQuantity && errors.maxGuestQuantity.message && (
            <ErrorText>{errors.maxGuestQuantity.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControlLabel
            label="Tem wifi disponível?"
            control={
              <Controller
                name={'isWifi'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isWifi: e.target.checked,
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
            label="Tem estacionamento disponível?"
            control={
              <Controller
                name={'isParking'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isParking: e.target.checked,
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
            label="Aberto"
            control={
              <Controller
                name={'isOpen'}
                control={control}
                render={(props) => (
                  <Checkbox
                    {...props}
                    checked={props.field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHours({
                        ...hours,
                        isOpen: e.target.checked,
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
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.start_hour}
              label="Horário de abertura"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  start_hour: newValue,
                });
                setValue('start_hour', hours.start_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário de abertura"
                />
              )}
            />
          </LocalizationProvider>
          {errors.start_hour && errors.start_hour.message && (
            <ErrorText>{errors.start_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.end_hour}
              label="Horário de fechamento"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  end_hour: newValue,
                });
                setValue('end_hour', hours.end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário de fechamento"
                />
              )}
            />
          </LocalizationProvider>
          {errors.end_hour && errors.end_hour.message && (
            <ErrorText>{errors.end_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.weekend_start_hour}
              label="Horário de abertura (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  weekend_start_hour: newValue,
                });
                setValue('weekend_start_hour', hours.weekend_start_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário de abertura (Final de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.weekend_start_hour && errors.weekend_start_hour.message && (
            <ErrorText>{errors.weekend_start_hour.message}</ErrorText>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
            <MobileTimePicker
              value={hours.weekend_end_hour}
              label="Horário de fechamento (Final de semana)"
              onChange={(newValue) => {
                setHours({
                  ...hours,
                  weekend_end_hour: newValue,
                });
                setValue('weekend_end_hour', hours.weekend_end_hour, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Selecione o horário de fechamento (Final de semana)"
                />
              )}
            />
          </LocalizationProvider>
          {errors.weekend_end_hour && errors.weekend_end_hour.message && (
            <ErrorText>{errors.weekend_end_hour.message}</ErrorText>
          )}
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
      <CreateButton variant="contained" type="submit">
        Salvar
      </CreateButton>
    </form>
  );
};
