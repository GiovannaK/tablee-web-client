import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/system';

export const Input = styled(InputBase)`
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  padding: ${(props) => props.theme.spacing(0.5)};
  padding-left: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(1)};
  font-size: ${(props) => props.theme.spacing(1.2)};
  margin-bottom: ${(props) => props.theme.spacing(1)};
  background: rgba(0,0,0,0.7);
  color: ${(props) => props.theme.palette.primary.main};
  &.Mui-focused{
    border-color: ${(props) => props.theme.palette.primary.light};
  }
`;

export const SearchButton = styled(Button)`
  width: 100%;
  padding-bottom: ${(props) => props.theme.spacing(0.9)};
  padding-top: ${(props) => props.theme.spacing(1)};
  font-size: ${(props) => props.theme.spacing(1)};
  letter-spacing: 1.4px;
  font-weight: 700;
  border-radius: 0px;
  &:hover{
    background: ${(props) => props.theme.palette.secondary.main};
  }
`