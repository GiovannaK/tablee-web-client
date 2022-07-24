import { Typography } from '@mui/material';
import { styled } from '@mui/system';


export const NotFoundText = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.light};
  font-weight: 700;
  font-size: ${(props) => props.theme.spacing(1.4)};
  text-transform: uppercase;
  padding-bottom: ${(props) => props.theme.spacing(1.4)};
  padding-top: ${(props) => props.theme.spacing(1.4)};
`
