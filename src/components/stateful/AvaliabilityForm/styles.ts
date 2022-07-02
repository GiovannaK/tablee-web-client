import { Button, InputBase, InputLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FullWidthButton } from '../../../styles/global/styles';

export const AvaliabilityFormButton = styled(FullWidthButton)`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(0.8)};
`;
