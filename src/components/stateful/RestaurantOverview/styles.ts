import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Subtitle1 } from '../../../styles/global/styles';

export const Paragraph = styled(Typography)`
  font-weight: 900;
  color: ${(props) => props.theme.palette.secondary.main};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)};
`;

export const SubtitleOverview = styled(Subtitle1)`
  padding-top: ${(props) => props.theme.spacing(1.7)};
  color: ${(props) => props.theme.palette.secondary.main};
  text-align: center;
`;
