import 'react-toastify/dist/ReactToastify.css';

import icon from '@assets/images/notification-icon.svg';
import axios from 'axios';
import React, { ButtonHTMLAttributes } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getNotificationRoute } from 'utils/endpoints';
import { BASE_URL } from 'utils/request';

import { Container } from './styles';

type INotificationButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  saleid: number;
};

const NotificationButton: React.FC<INotificationButton> = ({ ...rest }) => {
  const showNotificationConfirmationMessage = () => {
    toast.info('SMS enviado!', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message',
      pauseOnHover: false,
      progress: undefined,
      hideProgressBar: true,
    });
  };

  const sendSaleNotificationHandler = () => {
    const endpoint = getNotificationRoute(rest.saleid);
    axios
      .get(`${BASE_URL}/${endpoint}`)
      .then(() => showNotificationConfirmationMessage());
  };
  return (
    <React.Fragment>
      <Container>
        <button {...rest} onClick={sendSaleNotificationHandler}>
          <img src={icon} alt="Notificar" />
        </button>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
};

export default NotificationButton;
