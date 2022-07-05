import { Box, Card, CardContent, Grid, Modal } from '@mui/material';
import React from 'react';
import { ParagraphModal } from '../MenuModal/styles';

interface IPolicy {
  open: boolean;
  handleClose: () => void;
}

export const PoliciesModal = (props: IPolicy) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box>
        <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card sx={{ width: '80vw' }}>
              <CardContent>
                <ParagraphModal>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  excepturi velit impedit perferendis vero eaque cupiditate
                  libero molestias error. Totam dicta id recusandae dolorum eum
                  corrupti, saepe quis vel quam quod ut aut aperiam, vero labore
                  voluptates adipisci, fugit voluptatum.
                </ParagraphModal>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
