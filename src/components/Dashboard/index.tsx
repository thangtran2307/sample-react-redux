import React, { useEffect, useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn, setIsLoggedIn } from '../Authentication/authSlice';
import RoutingPath from '../Routing/routingPath';
import { selectToggleLoadingScreen, toggleLoading } from '../Ui/uiSlice';
import { apiErrorHandler } from '../../common/errorHandler';
import { getAllSamplesAsync as getAllSamplesServiceAsync } from './dashboardService';
import { Sample } from './dashboardInterfaces';
import SampleTable from './sampleTable';

export default function Dashboard() {
  const history = useHistory();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const toggleLoadingScreen = useAppSelector(selectToggleLoadingScreen);
  const dispatch = useAppDispatch();

  const [sampleList, setSampleList] = useState<Sample[]>([]);

  // Call api only once when the dashboard is loaded
  useEffect(() => {
    async function getAllSamplesAsync() {
      dispatch(toggleLoading({ isShow: true }));

      try {
        const samples = await getAllSamplesServiceAsync();
        setSampleList(samples);
        dispatch(toggleLoading({ isShow: false }));
      } catch (err: any) {
        dispatch(toggleLoading({ isShow: false }));
        apiErrorHandler({ error: err, type: 'Common' });
      }
    }

    getAllSamplesAsync();
  }, []);

  function onLoginSwitchChanged(value: boolean) {
    dispatch(setIsLoggedIn(value));
  }

  function onLoadingSwitchChanged(value: boolean) {
    dispatch(toggleLoading({
      isShow: value,
      type: 'Common',
    }));

    // Will turn off after 3s
    setTimeout(() => {
      dispatch(toggleLoading({
        isShow: false,
      }));
    }, 3000);
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

        <Space align="baseline">
          <h3>Is Loading</h3>
          <Switch checked={toggleLoadingScreen.isShow} onChange={onLoadingSwitchChanged} />
        </Space>

        <Space>
          <Button>
            Go to Sample
          </Button>

          <Button onClick={onProtectedButtonClicked}>
            Go to Protected Page
          </Button>
        </Space>

        <SampleTable sampleList={sampleList} />
      </Space>

    </div>
  );
}
