import * as React from 'react';
import SwiperCore, {
  Navigation,
  Autoplay,
  Thumbs,
  Pagination,
  Grid,
} from 'swiper';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/grid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import theme from '../theme';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import client from '../apollo';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY as string
);

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  SwiperCore.use([Navigation, Autoplay, Thumbs, Pagination, Grid]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Elements stripe={stripePromise}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ApolloProvider>
      </Elements>
    </ThemeProvider>
  );
}
