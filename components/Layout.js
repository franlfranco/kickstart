import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header.js';

const Layout = (props) => {
  return (
    <div>
      <Container>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;

// To set the 'children' of a component:
// <Layout>WHATEVER YOU PUT HERE WILL BE SET AS {props.children}</Layout>
