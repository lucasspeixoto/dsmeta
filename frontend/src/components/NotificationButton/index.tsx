import icon from '@assets/images/notification-icon.svg';
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type INotificationButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  saleid: number;
};

const NotificationButton: React.FC<INotificationButton> = ({ ...rest }) => {
  const sendSaleNotificationHandler = () => {
    console.log(rest.saleid);
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
