import React, { FC } from 'react';

import { Consumer, Combo, useStorybookApi } from '@storybook/api';

import NotificationList from '../components/notifications/NotificationList';

export const mapper = ({ state }: Combo) => {
  const { clearNotification } = useStorybookApi();
  const { notifications } = state;

  return {
    notifications,
    clearNotification,
  };
};

const NotificationConnect: FC<any> = (props) => (
  <Consumer filter={mapper}>
    {(fromState) => <NotificationList {...props} {...fromState} />}
  </Consumer>
);

export default NotificationConnect;
