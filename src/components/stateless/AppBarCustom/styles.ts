import { AppBar, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const AppBarLink = styled(Button)`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: ${(props) => props.theme.spacing(1.3)};
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  &:hover{
    color: ${(props) => props.theme.palette.secondary.dark};
  }
`;

export const AppBarComponent = styled(AppBar)`
  background: transparent;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  letter-spacing: 1.3px;
  min-height: 3vh;
  height: 100%;
`
