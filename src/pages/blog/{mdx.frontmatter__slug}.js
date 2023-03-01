import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = () => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;