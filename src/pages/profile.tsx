import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
} from '@mui/material';
import React from 'react';
import { Layout } from '../components/stateless/Layout';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { TopBar } from '../components/stateless/TopBar';
import { CardForm, CardInfo, ProfileLinks } from '../styles/profile/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ProfileForm } from '../components/stateful/ProfileForm';
import { Speed } from '../components/Speed';
import { CardTitleProfile } from '../components/stateful/ProfileForm/styles';
import { DropzoneDialog } from 'react-mui-dropzone';

type ProfileProps = {
  primary: boolean;
  secondary: boolean;
};

const Profile: React.FC<ProfileProps> = () => {
  const [openUpload, setOpenUpload] = React.useState<boolean>(false);
  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout title="Tablee - Meus dados">
          <Box mt={1}>
            <Grid container justifyContent="center">
              <Hidden lgDown>
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
                          <Avatar
                            sx={{ width: 150, height: 150, cursor: 'pointer' }}
                            onClick={() => setOpenUpload(true)}
                          >
                            A
                          </Avatar>
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
                            M??todos de pagamento
                          </ProfileLinks>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardInfo>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <CardForm variant="outlined">
                  <CardContent>
                    <CardTitleProfile>
                      Atualizar Informa????es Pessoais
                    </CardTitleProfile>
                    <ProfileForm />
                  </CardContent>
                </CardForm>
              </Grid>
            </Grid>
          </Box>
          <Speed setOpenUpload={setOpenUpload} />
        </Layout>
      </PaperComponent>
      <DropzoneDialog
        /* acceptedFiles={['.pdf', '.xls', '.doc', '.docx', '.csv']} */
        cancelButtonText="cancelar"
        submitButtonText="enviar"
        maxFileSize={3145728}
        open={openUpload}
        dropzoneText="Arraste a imagem aqui ou clique"
        filesLimit={1}
        onClose={() => setOpenUpload(false)}
        onSave={(files) => {
          const file = files[0];
          console.log(file);
          /* uploadFile({ variables: { file, id: taskId, workspaceId: id } }); */
          setOpenUpload(false);
        }}
        showPreviews
        showFileNamesInPreview
      />
    </>
  );
};

export default Profile;
