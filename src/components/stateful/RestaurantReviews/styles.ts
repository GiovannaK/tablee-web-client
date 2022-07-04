import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const ParagraphReview = styled(Typography)`
  font-weight: 500;
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: ${(props) => props.theme.spacing(1.2)};
  padding-top: ${(props) => props.theme.spacing(1.2)};
`;
