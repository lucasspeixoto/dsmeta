import icon from '@assets/images/notification-icon.svg';
import axios from 'axios';
import React, { ButtonHTMLAttributes } from 'react';
import { getNotificationRoute } from 'utils/endpoints';
import { BASE_URL } from 'utils/request';

import { Container } from './styles';

type INotificationButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  saleid: number;
};

const NotificationButton: React.FC<INotificationButton> = ({ ...rest }) => {
  const sendSaleNotificationHandler = () => {
    const endpoint = getNotificationRoute(rest.saleid);
    axios.get(`${BASE_URL}/${endpoint}`);
  };
  return (
    <Container>
      <button {...rest} onClick={sendSaleNotificationHandler}>
        <img src={icon} alt="Notificar" />
      </button>
    </Container>
  );
};

export default NotificationButton;
