//import { mixins } from '@styles/abstracts/mixins';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  > thead {
    height: 55px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
  }

  > tbody {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.8;
    text-align: center;
  }

  > tbody th {
    height: 74px;
    border-top: 10px solid ${(props) => props.theme.colors.white};
  }

  > tbody tr:hover > td {
    background-color: ${(props) => props.theme.colors.secondary};
    opacity: 0.6;
  }

  > tbody tr:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const NotificationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
