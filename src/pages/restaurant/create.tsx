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
import useFormPersist from 'react-hook-form-persist';
import { CreateButton } from '../../styles/restaurant/create';
import { CreateRestaurantForm } from '../../components/stateful/CreateRestaurantForm';

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
    watch,
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
    isWifi: false,
    isParking: false,
    isOpen: false,
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

  if (typeof window !== 'undefined') {
    useFormPersist('basicData', {
      watch,
      setValue,
      storage: window.localStorage,
    });
  }

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee | Criar restaurante">
        <Box mt={2} mb={2}>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card elevation={0}>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      fontSize: '1.7rem',
                      textAlign: 'center',
                      fontWeight: 900,
                      paddingBottom: '1.5rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Criar um restaurante
                  </Typography>
                  <CreateRestaurantForm hours={hours} setHours={setHours} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default CreateRestaurant;
