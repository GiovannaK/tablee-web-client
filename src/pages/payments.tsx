import {
  Box,
  Card,
  CardContent,
  FormLabel,
  Grid,
  Typography,
} from '@mui/material';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import { Controller, useForm } from 'react-hook-form';
import {
  ButtonPayment,
  CreditCard,
  InputPayment,
  LabelPayment,
  TitlePayment,
} from '../styles/payments/styles';

const options = {
  style: {
    base: {
      color: '#32325d',
      fontSize: '20px',
    },
  },
};

const Payments = () => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee | Seus métodos de pagamento">
        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card elevation={0}>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <form>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TitlePayment>Adicionar Cartão de crédito</TitlePayment>
                        <LabelPayment>Número</LabelPayment>
                        <InputPayment>
                          <CardNumberElement options={options} />
                        </InputPayment>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <LabelPayment>CVV</LabelPayment>
                        <InputPayment>
                          <CardCvcElement options={options} />
                        </InputPayment>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <LabelPayment>Expiração</LabelPayment>
                        <InputPayment>
                          <CardExpiryElement options={options} />
                        </InputPayment>
                        <ButtonPayment variant="contained">
                          Adicionar
                        </ButtonPayment>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box
                mt={5}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '40vh',
                }}
              >
                <CreditCard>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12}>
                        <img
                          src="/chip.png"
                          alt="card chip"
                          style={{ maxWidth: '40px' }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography
                          sx={{
                            color: 'white',
                            textAlign: 'center',
                            paddingTop: '3rem',
                          }}
                        >
                          4242 4242 4242 4242
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            color: 'white',
                            paddingTop: '2rem',
                            textAlign: 'end',
                          }}
                        >
                          EXPIRATION
                        </Typography>
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: '0.8rem',
                            textAlign: 'end',
                          }}
                        >
                          12/28
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CreditCard>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default Payments;
