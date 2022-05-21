import * as React from 'react';
import Container from '@mui/material/Container';
import { PaperComponent } from '../components/stateless/PaperComponent';
import { Layout } from '../components/stateless/Layout';
import { TopBar } from '../components/stateless/TopBar';
import { Banner } from '../components/stateless/Banner';
import { Categories } from '../components/stateful/Categories';

export default function Index() {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Tablee - Escolha entre vários restuarantes | Reserve sua mesa">
        <Banner />
        <Categories />
      </Layout>
    </PaperComponent>
  );
}
