import React from 'react'
import { PaperStyled } from './styles'

export const PaperComponent = ({children}: any) => {
  return (
    <PaperStyled square elevation={0}>
      {children}
    </PaperStyled>
  )
}