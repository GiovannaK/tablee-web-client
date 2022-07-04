import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Subtitle1 } from '../../../styles/global/styles';


export const CardTitle = styled(Subtitle1)`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: ${(props) => props.theme.spacing(1.2)}
`;
