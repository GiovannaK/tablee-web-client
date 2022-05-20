import { Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import { AppBarStyled } from './styles/styles';

export const TopBar = () => {
  const pages = ['Products', 'Pricing', 'Blog'];
  return (
    <AppBarStyled position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box flexGrow={1}>
            <img
              src="fulllogo.png"
              style={{
                maxWidth: 140,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<RestaurantIcon />}
              sx={{fontWeight: 'bold', mr: 4}}
            >
              Cadastrar meu restaurante
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PersonIcon />}
              sx={{fontWeight: 'bold'}}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
