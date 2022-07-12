import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FullWidthButton } from '../global/styles';


export const CreateButton = styled(FullWidthButton)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  font-weight: 900;
`;
