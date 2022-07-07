import { SpeedDialAction } from '@mui/material';
import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';


export const CustomSpeedDialAction = styled(SpeedDialAction)`
  background: ${(props) => props.theme.palette.secondary.main};
  text-align: center;
  transition: 0.5s ease-in-out;
  &:hover{
    background: ${(props) => props.theme.palette.text.primary};
  }
`;
