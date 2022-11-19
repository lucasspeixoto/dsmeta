import NotificationButton from '@comp/NotificationButton';
import { Sale } from '@models/sale';
import React from 'react';
import { dateFormat } from 'utils/date';

import { NotificationButtonContainer, Table } from './styles';

interface SalesTableProps {
  sales: Sale[];
}

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="show992">ID</th>
          <th className="show576">Data</th>
          <th>Vendedor</th>
          <th className="show992">Visitas</th>
          <th className="show992">Vendas</th>
          <th>Total</th>
          <th>Notificar</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale) => {
          return (
            <tr key={sale.id}>
              <td className="show992">{sale.id}</td>
              <td className="show576">{dateFormat(sale.date)}</td>
              <td>{sale.sellerName}</td>
              <td className="show992">{sale.visited}</td>
              <td className="show992">{sale.deals}</td>
              <td>R$ {sale.amount.toFixed(2)}</td>
              <td>
                <NotificationButtonContainer>
                  {' '}
                  <NotificationButton saleid={sale.id} />
                </NotificationButtonContainer>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SalesTable;
