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
  InputAccess,
  FullWidthButton,
  CardTitle2,
  ErrorText,
  GoogleButton,
  InputTexFieldAccess,
} from '../styles/global/styles';
import Link from 'next/link';

const RegisterOwner = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Grid container mt={2}>
          <Hidden lgDown>
            <Grid item xs={12} sm={12} lg={6} xl={6} sx={{ maxHeight: '85vh' }}>
              <img
                src="undraw_cooking.svg"
                style={{
                  width: '100%',
                  height: '100%',
                }}
                alt="pessoa cozinhando"
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
                borderColor: 'transparent'
              }}
            >
              <CardContent sx={{ width: '90%' }}>
                <form>
                  <CardTitle1 variant="h1">Tem um restaurante?</CardTitle1>
                  <CardTitle2 variant="h1">Crie uma conta</CardTitle2>
                  <InputTexFieldAccess
                    placeholder="Digite seu Nome"
                    label="Nome"
                    autoComplete="off"
                    required
                  />
                  <ErrorText>Nome inválido</ErrorText>
                  <InputTexFieldAccess
                    placeholder="Digite seu Sobrenome"
                    label="Sobrenome"
                    autoComplete="off"
                    required
                  />
                  <ErrorText>Sobrenome inválido</ErrorText>
                  <InputTexFieldAccess
                    placeholder="Digite seu E-mail"
                    label="E-mail"
                    autoComplete="off"
                    required
                  />
                  <ErrorText>E-mail inválido</ErrorText>

                  <InputTexFieldAccess
                    placeholder="Digite seu Número de Celular"
                    label="Número de Celular"
                    autoComplete="off"
                    required
                  />
                  <ErrorText>Celular inválido</ErrorText>

                  <InputTexFieldAccess
                    placeholder="Digite seu número de telefone secundário (Opcional)"
                    label="Número secundário"
                    autoComplete="off"
                  />
                  <ErrorText>Telefone inválido</ErrorText>

                  <FullWidthButton variant="contained" sx={{marginBottom: '1.5rem'}}>
                    Criar conta
                  </FullWidthButton>
                  <GoogleButton variant="outlined" startIcon={<GoogleIcon />}>
                    Entrar com Google
                  </GoogleButton>
                  <Link href="/login">
                    <Button color="info" sx={{ fontSize: '1rem', paddingTop: '1.5rem' }}>
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

export default RegisterOwner;
