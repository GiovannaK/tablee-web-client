import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import theme from '../theme';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
