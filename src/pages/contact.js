import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const ContactPage = () =>
  <Layout pageTitle="Contact">
    <ul>
      <li>
        <Link to="https://www.instagram.com/247alan">
          Instagram
        </Link>
      </li>
      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </Layout>;

export const Head = () => <title>Contact</title>;

export default ContactPage;