import { Button, Card, CardMedia, InputLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FullWidthButton, Subtitle1 } from '../../../styles/global/styles';

export const CardForm = styled(Card)`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.spacing(1.2)};
  background: transparent;
  width: 100%;
  min-height: 90vh;
  max-height: 90vh;
`;

export const InputOulinedLabel = styled(InputLabel)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 700;
  font-size: ${(props) => props.theme.spacing(1.2)};
`

export const CustomTextField = styled(TextField)`
  &.MuiTextField-root {
    & fieldset {
      border: 2px solid;
      border-color: ${(props) => props.theme.palette.secondary.main};
    }
    &.Mui-focused fieldset {
      border: 2px solid;
    }
  }
`

export const ProfileInfoButton = styled(FullWidthButton)`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(0.8)};
`;

export const CardTitleProfile = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: ${(props) => props.theme.spacing(1.7)};
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  padding: ${(props) => props.theme.spacing(2)};
`;
