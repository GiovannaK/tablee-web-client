import { Button, Container, Hidden, Toolbar } from '@mui/material';
import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import { AppBarStyled } from './styles/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { AuthContext } from '../../../context/authContext';
import { Dropdown } from '../Dropdown';

export const TopBar = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <AppBarStyled position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden mdUp>
            <Box flexGrow={1}>
              <Link href="/">
                <img
                  src="/fulllogo.png"
                  style={{
                    maxWidth: 120,
                    maxHeight: 40,
                    cursor: 'pointer',
                    display: 'flex',
                    margin: 'auto',
                    textAlign: 'center',
                  }}
                />
              </Link>
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Box flexGrow={1}>
              <Link href="/">
                <img
                  src="/fulllogo.png"
                  style={{
                    maxWidth: 120,
                    cursor: 'pointer',
                    display: 'flex',
                  }}
                />
              </Link>
            </Box>
            <Box>
              {user ? (
                <Dropdown />
              ) : (
                <>
                  <Link href="/registerowner">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<RestaurantIcon />}
                      sx={{ fontWeight: 'bold', mr: 4 }}
                    >
                      Cadastrar meu restaurante
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<PersonIcon />}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      variant="text"
                      color="info"
                      startIcon={<AccountCircleIcon />}
                      sx={{ fontWeight: 'bold', ml: 4 }}
                    >
                      Criar conta
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
