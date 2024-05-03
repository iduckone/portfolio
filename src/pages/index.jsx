import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageContents from '../PageContents/PageContents';

const IndexPage = () => (
  <Layout>
    <PageContents />
  </Layout>
);

export const Head = () => <Seo title='Home' />;

export default IndexPage;
