import React from 'react';
import styled from '@emotion/styled'

const AdminLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default AdminLayout;

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  > div {
    z-index: 1;
  }
`