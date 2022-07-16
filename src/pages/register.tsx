import {
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import {
  CardTitle1,
  FullWidthButton,
  ErrorText,
  GoogleButton,
  InputTexFieldAccess,
} from '../styles/global/styles';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  CreateUserInput,
  Exact,
  useCreateUserMutation,
} from '../../graphql/generated/schema';
import axios from 'axios'
import { gql, useMutation } from '@apollo/client';


const REGISTER_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      firstName
      lastName
      email
      mainPhone
      secondaryPhone
    }
  }
`
interface IRegisterForm {
  email: string;
  firstName: string;
  lastName: string;
  mainPhone: string;
  secondaryPhone?: string;
}

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // const [createUserMutation, { data, loading, error }] =
  //   useCreateUserMutation();
  // const [createUser, { loading }] = useCreateUserMutation({
  //   update(_, __) {
  //     toast.info(`Um e-mail de ativação foi enviado`);
  //   },
  //   onError(err) {
  //     toast.error('Não foi possível registrar usuário');
  //   },
  // });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, __) {
      toast.info(`Um e-mail de ativação foi enviado!`);
    },
    onError(err) {
      toast.error('Não foi possível registrar usuário');
    },
  });



  const onSubmit = (values: any) => {
    console.log('HERE')
    registerUser({ variables: { data: values } });
    console.log('HEY')
  };

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2}>
          <Hidden lgDown>
            <Grid item xs={12} sm={12} lg={6} xl={6} sx={{ maxHeight: '85vh' }}>
              <img
                src="register_image.jpg"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.5)',
                }}
                alt="imagem de restaurante"
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} lg={6} xl={6} sx={{ maxHeight: '85vh' }}>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: '90%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardTitle1 variant="h1">Crie uma conta</CardTitle1>
                  <InputTexFieldAccess
                    placeholder="Digite seu Nome"
                    label="Nome"
                    autoComplete="off"
                    {...register('firstName', {
                      required: 'Nome é requerido.',
                      maxLength: 200,
                    })}
                  />
                  {errors.firstName && errors.firstName.message && (
                    <ErrorText>{errors.firstName.message}</ErrorText>
                  )}
                  <InputTexFieldAccess
                    placeholder="Digite seu Sobrenome"
                    label="Sobrenome"
                    autoComplete="off"
                    {...register('lastName', {
                      required: 'último nome é requerido.',
                      maxLength: 200,
                    })}
                  />
                  {errors.lastName && errors.lastName.message && (
                    <ErrorText>{errors.lastName.message}</ErrorText>
                  )}
                  <InputTexFieldAccess
                    placeholder="Digite seu E-mail"
                    label="E-mail"
                    autoComplete="off"
                    {...register('email', {
                      required: 'E-mail é requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido',
                      },
                    })}
                  />
                  {errors.email && errors.email.message && (
                    <ErrorText>{errors.email.message}</ErrorText>
                  )}
                  <InputTexFieldAccess
                    placeholder="Digite seu Número de Celular"
                    label="Número de Celular"
                    autoComplete="off"
                    {...register('mainPhone', {
                      required: 'Número de celular é requerido.',
                      maxLength: 11,
                      minLength: 11,
                    })}
                  />
                  {errors.mainPhone && errors.mainPhone.message && (
                    <ErrorText>{errors.mainPhone.message}</ErrorText>
                  )}
                  <InputTexFieldAccess
                    placeholder="Digite seu número de telefone secundário (Opcional)"
                    label="Número secundário"
                    autoComplete="off"
                    {...register('secondaryPhone', {
                      maxLength: {
                        value: 11,
                        message:
                          'Número de telefone deve ter até 11 dígitos incluindo DDD',
                      },
                      minLength: {
                        value: 11,
                        message:
                          'Número de telefone deve ter pelo menos 11 dígitos incluindo DDD',
                      },
                    })}
                  />
                  {errors.secondaryPhone && errors.secondaryPhone.message && (
                    <ErrorText>{errors.secondaryPhone.message}</ErrorText>
                  )}

                  <FullWidthButton
                    variant="contained"
                    sx={{ marginBottom: '1.5rem' }}
                    type="submit"
                    disabled={loading}
                  >
                    Criar conta
                  </FullWidthButton>
                  <GoogleButton variant="outlined" startIcon={<GoogleIcon />}>
                    Entrar com Google
                  </GoogleButton>
                  <Link href="/login">
                    <Button
                      color="info"
                      sx={{ fontSize: '1rem', paddingTop: '1.5rem' }}
                    >
                      Já tem uma conta? Faça login
                    </Button>
                  </Link>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </PaperComponent>
  );
};

export default Register;
