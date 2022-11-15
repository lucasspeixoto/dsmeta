import icon from '@assets/images/notification-icon.svg';
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type INotificationButton = ButtonHTMLAttributes<HTMLButtonElement>;

const NotificationButton: React.FC<INotificationButton> = ({ ...rest }) => (
  <Container>
    <button {...rest}>
      <img src={icon} alt="Notificar" />
    </button>
  </Container>
);

export default NotificationButton;
