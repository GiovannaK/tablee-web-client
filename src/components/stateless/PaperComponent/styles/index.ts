import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const PaperStyled = styled(Paper)`
  background:  ${(props) => props.theme.palette.background.paper};
  min-height: 100vh;
  z-index: -2;
  position: absolute;
  min-width: 100%;
`;
