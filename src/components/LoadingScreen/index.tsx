import { LoadingOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectToggleLoadingScreen } from '../Ui/uiSlice';

export default function LoadingScreen() {
  const toggleLoadingScreen = useAppSelector(selectToggleLoadingScreen);

  let title = 'Loading';
  let description = '';

  if (toggleLoadingScreen.type === 'SaveDraft') {
    title = 'Saving draft...';
    description = 'Please do not close your browser or leave this page.';
  } else if (toggleLoadingScreen.type === 'SubmitForm') {
    title = 'Submitting...';
    description = 'Please do not close your browser or leave this page.';
  }

  return (
    <Modal
      visible={toggleLoadingScreen.isShow}
      centered
      footer={null}
      closable={false}
      keyboard={false}
    >
      <Space style={{ width: '100%' }} direction="vertical" align="center">
        <LoadingOutlined spin />
        <div>
          {title}
        </div>
        <div>
          {description}
        </div>
      </Space>
    </Modal>
  );
}
