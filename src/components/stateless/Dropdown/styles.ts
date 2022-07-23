import { Card, CardMedia, Menu, Typography, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Subtitle1 } from '../../../styles/global/styles';

export const MenuItemComponent = styled(MenuItem)`
  font-size: ${(props) => props.theme.spacing(1.4)};
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.main};
`;
