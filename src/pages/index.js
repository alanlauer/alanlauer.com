import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi there! I'm Alan. This is the home page. Welcome</p>
      <StaticImage
        alt="Clifford, a reddish-brown doggo took a big ole poo"
        src="../images/clifford.jpeg"
      />
    </Layout>
  );
};
export default IndexPage;

export const Head = () => <Seo title="Home Page" />;