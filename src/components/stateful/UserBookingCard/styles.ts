import { Box, Button, Card, CardMedia, Tab, Typography } from '@mui/material';
import { styled } from '@mui/system';

type BookingCardProps = {
  pending?: string;
  approved?: string;
  progress?: string;
  rejected?: string;
  finished?: string;
  canceled?: string;
  all?: string;
};

const colorsForTab = {
  all: '#D46293',
  pending: '#46CDB8',
  approved: '#4ACA7F',
  progress: '#37B1BF',
  rejected: '#FF0000',
  finished: '#58A764',
  canceled: '#D48062',
};

export const CustomTab = styled(Tab)<BookingCardProps>`
  color: ${(props) =>
    (props.all && colorsForTab.all) ||
    (props.pending && colorsForTab.pending) ||
    (props.approved && colorsForTab.approved) ||
    (props.progress && colorsForTab.progress) ||
    (props.rejected && colorsForTab.rejected) ||
    (props.finished && colorsForTab.finished) ||
    (props.canceled && colorsForTab.canceled)};
  font-size: ${(props) => props.theme.spacing(1.2)};
  letter-spacing: 1.3px;
  font-weight: 700;
`;

export const CardBooking = styled(Card)``;

export const CardBox = styled(Box)<BookingCardProps>`
  background: ${(props) =>
    (props.all && colorsForTab.all) ||
    (props.pending && colorsForTab.pending) ||
    (props.approved && colorsForTab.approved) ||
    (props.progress && colorsForTab.progress) ||
    (props.rejected && colorsForTab.rejected) ||
    (props.finished && colorsForTab.finished) ||
    (props.canceled && colorsForTab.canceled)};
  width: 100%;
  height: 15px;
`;

export const CardBookingParagraph = styled(Typography)`
  font-size: ${(props) => props.theme.spacing(1.2)};
  font-weight: 700;
  color: ${(props) => props.theme.palette.secondary.main};
  text-transform: uppercase;
`;
export const CardStatus = styled(Typography)<BookingCardProps>`
  color: ${(props) =>
    (props.all && colorsForTab.all) ||
    (props.pending && colorsForTab.pending) ||
    (props.approved && colorsForTab.approved) ||
    (props.progress && colorsForTab.progress) ||
    (props.rejected && colorsForTab.rejected) ||
    (props.finished && colorsForTab.finished) ||
    (props.canceled && colorsForTab.canceled)};
  font-weight: 900;
  font-size: ${(props) => props.theme.spacing(1.4)};
  text-transform: uppercase;
`;
