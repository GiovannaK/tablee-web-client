import { AppBar, Button } from '@mui/material';
import { styled } from '@mui/system';

export const AppBarStyled = styled(AppBar)`
  background: ${(props) => props.theme.palette.background.default};
  height: 7vh;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;
export const LoginButton = styled(Button)`
  background: ${(props) => props.theme.palette.primary.light};
  font-size: ${(props) => props.theme.spacing(1.2)};
  color: ${(props) => props.theme.palette.text.primary};
  margin-right: 5rem;
`;
export const RegisterButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.dark};
  margin-right: ${(props) => props.theme.spacing(4)};
  font-size: ${(props) => props.theme.spacing(1.2)};
`;

