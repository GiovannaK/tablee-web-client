import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { Input, SearchButton } from './styles';

export const Banner = () => {
  return (
    <Box
      style={{
        zIndex: 1,
        maxWidth: '100%',
        maxHeight: '50vh',
        position: 'relative',
      }}
      mt={2}
    >
      <img
        src="/banner.png"
        style={{
          maxWidth: '100%',
          position: 'relative',
          minHeight: '30vh',
        }}
      />
      <form>
        <Grid
          container
          sx={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(50%, -50%)',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <Input
              placeholder="Procure por nome ou cidade..."
              type="search"
              inputProps={{
                sx: {
                  '&::placeholder': {
                    color: 'white',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
            <SearchButton variant="contained" type="submit">Vamos lá</SearchButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
