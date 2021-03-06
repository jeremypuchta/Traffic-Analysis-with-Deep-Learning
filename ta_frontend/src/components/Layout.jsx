import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Layout = props => {
  return (
    <Main>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Main>
  );
};

export default Layout;
