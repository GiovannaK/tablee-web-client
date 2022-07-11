import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { Layout } from '../../components/stateless/Layout';
import { PaperComponent } from '../../components/stateless/PaperComponent';
import { TopBar } from '../../components/stateless/TopBar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { RestaurantCategories } from '../../components/stateful/Categories/utils';
import {
  LocalizationProvider,
  MobileDatePicker,
  MobileTimePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import brLocale from 'date-fns/locale/pt-BR';

const steps = [
  'Dados básicos do restaurante',
  'Imagens do restaurante',
  'Endereço',
];

const CreateRestaurant = () => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
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

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Hook form

  const startHour = getValues('start_hour');
  const endHour = getValues('end_hour');
  const weekendStartHour = getValues('weekend_start_hour');
  const weekendEndHour = getValues('weekend_end_hour');
  const brunchStartHour = getValues('brunch_start_hour');
  const brunchEndHour = getValues('brunch_end_hour');
  const lunchStartHour = getValues('lunch_start_hour');
  const lunchEndHour = getValues('lunch_end_hour');
  const dinnerStartHour = getValues('dinner_start_hour');
  const dinnerEndHour = getValues('dinner_end_hour');
  const brunchStartHourWeekend = getValues('brunch_start_hour_weekend');
  const brunchEndHourWeekend = getValues('brunch_end_hour_weekend');
  const lunchStartHourWeekend = getValues('lunch_start_hour_weekend');
  const lunchEndHourWeekend = getValues('lunch_end_hour_weekend');
  const dinnerStartHourWeekend = getValues('dinner_start_hour_weekend');
  const dinnerEndHourWeekend = getValues('dinner_end_hour_weekend');

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee | Criar restaurante">
        <Box mt={5}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Card elevation={0}>
                        <CardContent>
                          <form>
                            <Grid container spacing={3}>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                              >
                                <TextField
                                  label="Nome do restaurante"
                                  name="name"
                                  required={true}
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="CNPJ"
                                  name="cnpj"
                                  fullWidth
                                  required={true}
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="E-mail"
                                  name="email"
                                  fullWidth
                                  required={true}
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="Número de telefone principal"
                                  name="mainPhone"
                                  fullWidth
                                  required={true}
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="Número de telefone secundário"
                                  name="secondaryPhone"
                                  fullWidth
                                  required={false}
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="Capacidade de pessoas"
                                  name="capacity"
                                  fullWidth
                                  required={true}
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl sx={{ width: '100%' }}>
                                  <InputLabel id="category">
                                    Categoria
                                  </InputLabel>
                                  <Select
                                    labelId="category"
                                    name="category"
                                    fullWidth
                                    label="Categoria"
                                    required={true}
                                    defaultValue=""
                                    inputProps={{
                                      ...register('category', {
                                        required: 'Categoria é requerida',
                                      }),
                                    }}
                                  >
                                    {RestaurantCategories.map((category) => (
                                      <MenuItem
                                        key={category.id}
                                        value={category.name}
                                      >
                                        {category.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                  label="Máximo de convidados por reserva"
                                  name="capacity"
                                  fullWidth
                                  required={true}
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
                                          onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                          ) => {
                                            setHours({
                                              ...hours,
                                              isAvaliableForBrunch:
                                                e.target.checked,
                                            });
                                            props.field.onChange(
                                              e.target.checked
                                            );
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
                                          onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                          ) => {
                                            setHours({
                                              ...hours,
                                              isAvaliableForLunch:
                                                e.target.checked,
                                            });
                                            props.field.onChange(
                                              e.target.checked
                                            );
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
                                          onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                          ) => {
                                            setHours({
                                              ...hours,
                                              isAvaliableForDinner:
                                                e.target.checked,
                                            });
                                            props.field.onChange(
                                              e.target.checked
                                            );
                                          }}
                                        />
                                      )}
                                    />
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.weekend_start_hour}
                                    label="Horário de abertura (Final de semana)"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        weekend_start_hour: newValue,
                                      });
                                      setValue(
                                        'weekend_start_hour',
                                        hours.weekend_start_hour,
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
                                        placeholder="Selecione o horário de abertura (Final de semana)"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.weekend_end_hour}
                                    label="Horário de fechamento (Final de semana)"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        weekend_end_hour: newValue,
                                      });
                                      setValue(
                                        'weekend_end_hour',
                                        hours.weekend_end_hour,
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
                                        placeholder="Selecione o horário de fechamento (Final de semana)"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.brunch_start_hour}
                                    label="Horário inicial de café da manhã"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        brunch_start_hour: newValue,
                                      });
                                      setValue(
                                        'brunch_start_hour',
                                        hours.brunch_start_hour,
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
                                        placeholder="Selecione o horário inicial de café da manhã"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.brunch_end_hour}
                                    label="Horário final de café da manhã"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        brunch_end_hour: newValue,
                                      });
                                      setValue(
                                        'brunch_end_hour',
                                        hours.brunch_end_hour,
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
                                        placeholder="Selecione o horário final de café da manhã"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.brunch_end_hour}
                                    label="Horário final de café da manhã"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        brunch_end_hour: newValue,
                                      });
                                      setValue(
                                        'brunch_end_hour',
                                        hours.brunch_end_hour,
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
                                        placeholder="Selecione o horário final de café da manhã"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.lunch_start_hour}
                                    label="Horário inicial do almoço"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        lunch_start_hour: newValue,
                                      });
                                      setValue(
                                        'lunch_start_hour',
                                        hours.lunch_start_hour,
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
                                        placeholder="Selecione o horário inicial do almoço"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.lunch_end_hour}
                                    label="Horário final do almoço"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        lunch_end_hour: newValue,
                                      });
                                      setValue(
                                        'lunch_end_hour',
                                        hours.lunch_end_hour,
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
                                        placeholder="Selecione o horário final do almoço"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.dinner_start_hour}
                                    label="Horário inicial do jantar"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        dinner_start_hour: newValue,
                                      });
                                      setValue(
                                        'dinner_start_hour',
                                        hours.dinner_start_hour,
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
                                        placeholder="Selecione o horário inicial do jantar"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
                                  <MobileTimePicker
                                    value={hours.dinner_end_hour}
                                    label="Horário final do jantar"
                                    onChange={(newValue) => {
                                      setHours({
                                        ...hours,
                                        dinner_end_hour: newValue,
                                      });
                                      setValue(
                                        'dinner_end_hour',
                                        hours.dinner_end_hour,
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
                                        placeholder="Selecione o horário final do jantar"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                  locale={brLocale}
                                >
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
                              </Grid>
                            </Grid>
                          </form>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                )}
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: 'inline-block' }}
                      >
                        Some step
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : 'Complete Step'}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default CreateRestaurant;
