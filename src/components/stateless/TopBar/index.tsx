import { Button, Container, Hidden, Toolbar } from '@mui/material';
import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import { AppBarStyled } from './styles/styles';
import Link from 'next/link';

export const TopBar = () => {
  const pages = ['Products', 'Pricing', 'Blog'];
  return (
    <AppBarStyled position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden mdUp>
            <Box flexGrow={1}>
              <Link href="/">
                <img
                  src="fulllogo.png"
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
                  src="fulllogo.png"
                  style={{
                    maxWidth: 120,
                    cursor: 'pointer',
                    display: 'flex',
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<RestaurantIcon />}
                sx={{ fontWeight: 'bold', mr: 4 }}
              >
                Cadastrar meu restaurante
              </Button>

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
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
