import SalesTable from '@comp/SalesTable';
import React from 'react';

import { Card, Container, FormContainer, SalesContainer } from './styles';

const Sales: React.FC = () => (
  <main>
    <SalesContainer id="sales">
      <Container>
        <Card>
          <h2>Vendas</h2>
          <FormContainer>
            <input type="text" />
          </FormContainer>
          <FormContainer>
            <input type="text" />
          </FormContainer>

          <SalesTable />
        </Card>
      </Container>
    </SalesContainer>
  </main>
);

export default Sales;
