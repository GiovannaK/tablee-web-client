import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from '@mui/material';
import React from 'react';
import { Layout } from '../../components/stateless/Layout';
import { PaperComponent } from '../../components/stateless/PaperComponent';
import { TopBar } from '../../components/stateless/TopBar';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { removeEmptyValuesFromFrom } from '../../utils/removeEmptyValuesFromFrom';
import { useValidateMutation } from '../../../graphql/generated/schema';
import { useRouter } from 'next/router';

interface IValidateForm {
  loginToken: string;
}

const Auth = () => {
  const router = useRouter();
  const { token } = router.query as any;

  const [validateMutation, { data, loading, error }] = useValidateMutation({
    update(_, __) {
      router.push('/profile')
    },
    onError(err) {
      toast.error('Não foi possível realizar o login.');
    },
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    validateMutation({
      variables: { data: { loginToken: token } as IValidateForm },
    });
  };
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Acesse sua conta">
        <Box mt={5}>
          <Grid container justifyContent={'center'}>
            <Grid xs={12} sm={12} md={12} lg={8} xl={8}>
              <Card sx={{ height: '80vh' }} elevation={0}>
                <CardContent>
                  <img
                    src="../auth.svg"
                    style={{ width: '95%', height: '100%' }}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      width: '100%',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                    }}
                    variant="contained"
                    onClick={(e) => handleClick(e)}
                  >
                    Acessar minha conta
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default Auth;
