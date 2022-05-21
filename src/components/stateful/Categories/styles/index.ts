import { Card, styled, Typography } from "@mui/material";

export const CustomCard = styled(Card)`
  background: transparent;
  transition: 0.3s ease-in;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.palette.secondary.main};
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover{
    border: 3px solid ${props => props.theme.palette.primary.main};
  }
`
export const CategoryTitle = styled(Typography)`
  text-align: center;
  font-size: ${props => props.theme.spacing(1.4)};
  color: ${props => props.theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: bold;
`