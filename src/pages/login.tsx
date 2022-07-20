import {
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
  Toolbar,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import {
  CardTitle1,
  InputAccess,
  FullWidthButton,
  CardTitle2,
  ErrorText,
  GoogleButton,
  InputTexFieldAccess,
} from '../styles/global/styles';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { removeEmptyValuesFromFrom } from '../utils/removeEmptyValuesFromFrom';
import { toast } from 'react-toastify';
import { useSigninMutation } from '../../graphql/generated/schema';

interface ILoginForm {
  email: string;
}
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>();
  const [signinMutation, { data, loading, error }] = useSigninMutation({
    update(_, __) {
      toast.info(`Um link de acesso foi enviado!`);
    },
    onError(err) {
      toast.error('Não foi possível enviar link.');
    },
  });

  const onSubmit = (values: ILoginForm) => {
    const ObjectWithoutEmptyProperties = removeEmptyValuesFromFrom(values);
    signinMutation({
      variables: { data: ObjectWithoutEmptyProperties as ILoginForm },
    });
  };
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2}>
          <Hidden lgDown>
            <Grid item xs={12} sm={12} lg={6} xl={6} sx={{ maxHeight: '85vh' }}>
              <img
                src="login_image.jpg"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.5)',
                }}
                alt="login image"
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
              <CardContent sx={{ width: '80%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardTitle1 variant="h1">Entrar com E-mail</CardTitle1>
                  <CardTitle2>Receba um link de acesso por e-mail</CardTitle2>
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
                  <FullWidthButton
                    variant="contained"
                    disabled={loading}
                    type="submit"
                  >
                    Enviar link
                  </FullWidthButton>
                  <CardTitle1>ou</CardTitle1>
                  <GoogleButton variant="outlined" startIcon={<GoogleIcon />}>
                    Entrar com Google
                  </GoogleButton>
                  <Toolbar />
                  <Link href="/register">
                    <Button color="info" sx={{ fontSize: '1rem' }}>
                      Não tem uma conta?
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

export default Login;
