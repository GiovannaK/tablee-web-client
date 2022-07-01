import { Button, InputBase, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Title1OnImage = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.dark};
  font-size: 2.2rem;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  letter-spacing: 0.3rem;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  text-align: center;
`;

export const Title2OnImage = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 70%;
  left: 46%;
  -webkit-transform: translate(-50%, -70%);
  transform: translate(-50%, -70%);
  letter-spacing: 0.3rem;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  text-align: center;
`;

export const CardTitle1 = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: ${(props) => props.theme.spacing(3)};
`;

export const CardTitle2 = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.light};
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  padding: ${(props) => props.theme.spacing(3)};
  padding-top: ${(props) => props.theme.spacing(0)};
`;

export const InputAccess = styled(InputBase)`
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 10px;
  width: 100%;
  padding: ${(props) => props.theme.spacing(1)};
  padding-left: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(1)};
  font-size: ${(props) => props.theme.spacing(1.5)};
  margin-bottom: ${(props) => props.theme.spacing(1)};
  color: ${(props) => props.theme.palette.primary.main};
  &.Mui-focused {
    border-color: ${(props) => props.theme.palette.primary.light};
  }
  &.Mui-error{
    border-color: ${(props) => props.theme.palette.error.main};
  }
`;

export const FullWidthButton = styled(Button)`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(0.8)};
`;


export const ErrorText = styled(Typography)`
  color: ${(props) => props.theme.palette.error.main};
  font-size: 1rem;
`

export const GoogleButton = styled(Button)`
  color: #DB4437;
  font-size: 1.1rem;
  width: 100%;
  padding: ${(props) => props.theme.spacing(0.5)};
  font-weight: bold;
  border-color: #DB4437;
  border: 2px solid;
  &:hover{
    border: 2px solid;
  }
`

export const InputTexFieldAccess = styled(TextField)`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing(1)};
  &.MuiInputBase-input{
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`