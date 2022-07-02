import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Paragraph = styled(Typography)`
  font-weight: 900;
  color: ${(props) => props.theme.palette.secondary.main};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)}
`;