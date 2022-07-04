import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Subtitle1 } from '../../../styles/global/styles';

export const ParagraphModal = styled(Typography)`
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.dark};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)};
`;
