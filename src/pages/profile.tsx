import { Avatar, Box, Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import { CardForm, CardInfo, ProfileLinks } from '../styles/profile/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ProfileForm } from '../components/stateful/ProfileForm';

type ProfileProps = {
  primary: boolean;
  secondary: boolean;
};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Meus dados">
        <Box mt={1} >
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <CardInfo>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '8rem',
                      }}
                    >
                      <Avatar sx={{ width: 150, height: 150 }}>A</Avatar>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center" mt={6}>
                      <ProfileLinks
                        startIcon={<MenuBookIcon />}
                        primary={false}
                        secondary={true}
                      >
                        Minhas Reservas
                      </ProfileLinks>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center" mt={6}>
                      <ProfileLinks
                        startIcon={<CreditCardIcon />}
                        primary={true}
                        secondary={false}
                      >
                          Métodos de pagamento
                      </ProfileLinks>
                    </Box>
                  </Grid>
                </Grid>
              </CardInfo>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <CardForm variant="outlined">
                <CardContent>
                  <ProfileForm />
                </CardContent>
              </CardForm>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default Profile;
