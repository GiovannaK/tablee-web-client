import { Card, CardContent, Grid, Hidden, Toolbar, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import { CardTitle1, InputAccess, FullWidthButton, CardTitle2, ErrorText, GoogleButton } from '../styles/global/styles';

const Login = () => {
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
              <CardContent sx={{width: '80%'}}>
                <form>
                  <CardTitle1 variant="h1">Entrar com E-mail</CardTitle1>
                  <CardTitle2>Receba um link de acesso por e-mail</CardTitle2>
                  <InputAccess placeholder="Digite seu e-mail" required/>
                  <ErrorText>E-mail inválido</ErrorText>
                  <FullWidthButton variant="contained">Enviar link</FullWidthButton>
                  <CardTitle1>ou</CardTitle1>
                  <GoogleButton variant="outlined" startIcon={<GoogleIcon />}>Entrar com Google</GoogleButton>
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
