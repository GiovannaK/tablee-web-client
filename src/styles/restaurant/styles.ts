import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CardTitle1 } from '../global/styles';


export const OverviewTitle = styled(CardTitle1)`
  color: ${(props) => props.theme.palette.secondary.main};
  font-weight: 900;
`;
