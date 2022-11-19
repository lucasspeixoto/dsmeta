import 'react-datepicker/dist/react-datepicker.css';

import SalesTable from '@comp/SalesTable';
import { Sale } from '@models/sale';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getSalesRoute } from 'utils/endpoints';
import { BASE_URL } from 'utils/request';

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

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const endpoint = getSalesRoute(minDate, maxDate);

    axios.get(`${BASE_URL}/${endpoint}`).then((response) => {
      const salesContent = response.data as Sale[];
      setSales(salesContent);
    });
  }, [minDate, maxDate]);

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
                isClearable
                maxDate={new Date()}
              />
            </FormContainer>
            <FormContainer>
              <StyledDatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                dateFormat="dd/MM/yyyy"
                isClearable
                maxDate={new Date()}
              />
            </FormContainer>
            <SalesTable sales={sales} />
          </Card>
        </Container>
      </SalesContainer>
    </main>
  );
};

export default Sales;
