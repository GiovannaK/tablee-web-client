import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FullWidthButton, Subtitle1 } from '../../../styles/global/styles';


export const CardTitleBooking = styled(Subtitle1)`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: ${(props) => props.theme.spacing(1.6)};
  text-align: center;
`;

export const Paragraph = styled(Typography)`
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.main};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)};
`;


export const Paragraph2 = styled(Typography)`
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.dark};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)};
  padding-top: ${(props) => props.theme.spacing(1.2)};
`;

export const BookingFormButton = styled(FullWidthButton)`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(0.8)};
`;
