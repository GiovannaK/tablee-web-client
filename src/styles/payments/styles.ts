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
