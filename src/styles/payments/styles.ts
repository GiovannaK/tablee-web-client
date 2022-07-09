import {
  Box,
  Button,
  Card,
  CardMedia,
  FormLabel,
  Tab,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { FullWidthButton } from '../global/styles';

export const LabelPayment = styled(FormLabel)`
  font-size: ${(props) => props.theme.spacing(1.2)};
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const TitlePayment = styled(Typography)`
  font-size: ${(props) => props.theme.spacing(1.8)};
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  padding: ${(props) => props.theme.spacing(2)};
`;

export const InputPayment = styled(Box)`
  border: 3px solid;
  border-color: ${(props) => props.theme.palette.secondary.main};
  padding: ${(props) => props.theme.spacing(1)};
  border-radius: 6px;
`;

export const ButtonPayment = styled(FullWidthButton)``;

export const CreditCard = styled(Card)`
  min-width: 27rem;
  height: 15rem;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 6px;
`;
