import { Button, Card, CardMedia, Tab, Typography } from '@mui/material';
import { styled } from '@mui/system';

type BookingProps = {
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
}

export const CustomTab = styled(Tab)<BookingProps>`
  color: ${(props) =>
    props.all
      && colorsForTab.all ||
      props.pending && colorsForTab.pending
      || props.approved && colorsForTab.approved ||
      props.progress && colorsForTab.progress ||
      props.rejected && colorsForTab.rejected ||
      props.finished && colorsForTab.finished ||
      props.canceled && colorsForTab.canceled

    };
  font-size: ${(props) => props.theme.spacing(1.2)};
  letter-spacing: 1.3px;
  font-weight: 700;
`;
