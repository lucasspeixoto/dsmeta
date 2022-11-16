import 'react-datepicker/dist/react-datepicker.css';

import SalesTable from '@comp/SalesTable';
import React, { useState } from 'react';

import {
  Card,
  Container,
  FormContainer,
  SalesContainer,
  StyledDatePicker,
} from './styles';

const Sales: React.FC = () => {
  const lastYearDate = new Date(new Date().setDate(new Date().getDate() - 365));
  const [minDate, setMinDate] = useState<Date>(lastYearDate);

  const [maxDate, setMaxDate] = useState<Date>(new Date());

  return (
    <main>
      <SalesContainer id="sales">
        <Container>
          <Card>
            <h2>Vendas</h2>
            <FormContainer>
              <StyledDatePicker
                selected={minDate}
                onChange={(date: Date) => setMinDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </FormContainer>
            <FormContainer>
              <StyledDatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </FormContainer>

            <SalesTable />
          </Card>
        </Container>
      </SalesContainer>
    </main>
  );
};

export default Sales;
