import React from 'react';
import { Button, Space, Switch } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn, setIsLoggedIn } from '../Authentication/authSlice';
import RoutingPath from '../Routing/routingPath';

export default function Dashboard() {
  const history = useHistory();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  function onLoginSwitchChanged(value: boolean) {
    dispatch(setIsLoggedIn(value));
  }

  function onProtectedButtonClicked() {
    history.push({
      pathname: `${RoutingPath.Protected}`,
    });
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Space direction="vertical">
        <Space align="baseline">
          <h3>Is Login</h3>
          <Switch checked={isLoggedIn} onChange={onLoginSwitchChanged} />
        </Space>

        <Space>
          <Button>
            Go to Sample
          </Button>

          <Button onClick={onProtectedButtonClicked}>
            Go to Protected Page
          </Button>
        </Space>
      </Space>
    </div>
  );
}
