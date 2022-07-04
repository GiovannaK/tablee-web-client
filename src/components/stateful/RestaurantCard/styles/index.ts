import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const CardStyled = styled(Card)`
  cursor: pointer;
  transition: 0.3s ease-in;
  background: ${(props) => props.theme.palette.background.main};
`;
export const CardMediaStyled = styled(CardMedia)`
  height: 170px;
`;

export const Title = styled(Typography)`
  font-weight: 900;
  color: ${(props) => props.theme.palette.secondary.main};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;
export const SubTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
`;

export const CategoryTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.light};
  font-weight: 700;
  text-transform: uppercase;
`;

export const IsOpen = styled(Typography)`
  color: green;
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.2)};
`;

export const IsClosed = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.dark};
  font-weight: 500;
  text-transform: uppercase;
`
