import { Container } from '@mui/material'
import React from 'react'
import Head from 'next/head'

export type LayoutProps = {
  title: string,
  children: React.ReactNode
}

export const Layout = ({title, children}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="xl" sx={{maxWidth: '100vw'}}>
        {children}
      </Container>
    </>
  )
}