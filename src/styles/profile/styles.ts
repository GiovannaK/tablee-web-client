import { Button, Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

type ProfileLinksProps = {
  primary: boolean;
  secondary: boolean;
};

export const CardInfo = styled(Card)`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.spacing(1.2)};
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  min-height: 90vh;
  max-height: 90vh;
`;

export const ProfileLinks = styled(Button)<ProfileLinksProps>`
  color: ${(props) =>
    props.primary
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  font-size: ${(props) => props.theme.spacing(1.2)};
  width: 100%;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const CardForm = styled(Card)`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.spacing(1.2)};
  background: transparent;
  width: 100%;
  min-height: 90vh;
  max-height: 90vh;
  overFlow-y: auto;
`;
