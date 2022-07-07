import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import { CustomTextField, InputOulinedLabel, ProfileInfoButton } from './styles'

export const ProfileForm = () => {
  return (
    <Box mt={1}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>NOME</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>SOBRENOME</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>CELULAR</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>TELEFONE SECUNDÁRIO</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>TELEFONE SECUNDÁRIO</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputOulinedLabel>E-MAIL</InputOulinedLabel>
            <CustomTextField fullWidth />
          </Grid>
        </Grid>
        <ProfileInfoButton variant="contained">Atualizar Informações</ProfileInfoButton>
      </form>
    </Box>
  )
}
