import NotificationButton from '@comp/NotificationButton';
import React from 'react';

import { NotificationButtonContainer, Table } from './styles';

const SalesTable: React.FC = () => {
  /* const sales: {
    id: string;
    date: string;
    seller: string;
    visits: number;
    sales: number;
    total: number;
  }[] = [
    {
      id: '#1',
      date: '16/11/2022',
      seller: 'Liana',
      visits: 15,
      sales: 11,
      total: 45879,
    },
    {
      id: '#2',
      date: '15/11/2022',
      seller: 'Lucas',
      visits: 15,
      sales: 10,
      total: 33879,
    },
    {
      id: '#3',
      date: '16/11/2022',
      seller: 'Cecília',
      visits: 12,
      sales: 7,
      total: 16987,
    },
  ];

  const columns = ['id', 'date', 'seller', 'visits', 'sales', 'total']; */

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
        <tr>
          <td className="show992">#341</td>
          <td className="show576">08/07/2022</td>
          <td>Anakin</td>
          <td className="show992">15</td>
          <td className="show992">11</td>
          <td>R$ 55300.00</td>
          <td>
            <NotificationButtonContainer>
              {' '}
              <NotificationButton />
            </NotificationButtonContainer>
          </td>
        </tr>
        <tr>
          <td className="show992">#341</td>
          <td className="show576">08/07/2022</td>
          <td>Anakin</td>
          <td className="show992">15</td>
          <td className="show992">11</td>
          <td>R$ 55300.00</td>
          <td>
            <NotificationButtonContainer>
              {' '}
              <NotificationButton />
            </NotificationButtonContainer>
          </td>
        </tr>
        <tr>
          <td className="show992">#341</td>
          <td className="show576">08/07/2022</td>
          <td>Anakin</td>
          <td className="show992">15</td>
          <td className="show992">11</td>
          <td>R$ 55300.00</td>
          <td>
            <NotificationButtonContainer>
              {' '}
              <NotificationButton />
            </NotificationButtonContainer>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SalesTable;
