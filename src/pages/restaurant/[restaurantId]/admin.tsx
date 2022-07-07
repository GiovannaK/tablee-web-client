import React from 'react';
import { Layout } from '../../../components/stateless/Layout';
import { PaperComponent } from '../../../components/stateless/PaperComponent';
import { TopBar } from '../../../components/stateless/TopBar';

export const Admin = () => {
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Restaurant Name - Admin">

      </Layout>
    </PaperComponent>
  );
};

export default Admin;
