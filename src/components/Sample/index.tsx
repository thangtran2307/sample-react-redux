import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Space } from 'antd';
import InputText from '../Common/InputText';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearState, selectSampleDetail, updateSampleDetail } from './sampleSlice';
import { SampleDetail } from './sampleInterfaces';
import { toggleLoading } from '../Ui/uiSlice';
import { apiErrorHandler } from '../../common/errorHandler';
import {
  createUpdateSampleAsync, getSampleByIdAsync as getSampleByIdServiceAsync,
} from './sampleService';
import showModal from '../Common/Modal';

interface SampleParams {
  sampleId: string,
}

export default function Sample() {
  const { sampleId } = useParams<SampleParams>();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const currentSampleDetail = useAppSelector(selectSampleDetail);

  useEffect(() => {
    async function getSampleByIdAsync() {
      dispatch(toggleLoading({ isShow: true }));

      try {
        const sample = await getSampleByIdServiceAsync(sampleId);
        dispatch(updateSampleDetail(sample));
        dispatch(toggleLoading({ isShow: false }));
        form.resetFields();
      } catch (err: any) {
        dispatch(toggleLoading({ isShow: false }));
        apiErrorHandler({ error: err, type: 'Common' });
      }
    }

    dispatch(clearState());

    if (sampleId) {
      getSampleByIdAsync();
    }

    return function cleanUp() {
      dispatch(clearState());
    };
  }, []);

  async function onFormFinishHandler(value: SampleDetail) {
    const sampleDetail : SampleDetail = {
      ...value,
      id: sampleId,
    };

    dispatch(toggleLoading({ isShow: true }));
    try {
      await createUpdateSampleAsync(sampleDetail);
      dispatch(toggleLoading({ isShow: false }));
      showModal({
        type: 'success',
        title: 'Info',
        content: ['Created / Updated Successfully'],
      });
    } catch (err: any) {
      dispatch(toggleLoading({ isShow: false }));
      apiErrorHandler({ error: err, type: 'Common' });
    }
  }

  return (
    <div>
      <h1>
        {sampleId ? 'Update Sample' : 'Create Sample'}
      </h1>
      <Form
        layout="vertical"
        form={form}
        initialValues={currentSampleDetail}
        onFinish={onFormFinishHandler}
        requiredMark={false}
      >
        <Space direction="vertical">
          <InputText
            label="Field One"
            name="fieldOne"
            maxLength={250}
            isCheckRequired
          />

          <InputText
            label="Field Two"
            name="fieldTwo"
            maxLength={250}
            isCheckRequired
          />

          <Button
            onClick={() => form.submit()}
          >
            {sampleId ? 'Update Sample' : 'Create Sample'}
          </Button>
        </Space>
      </Form>
    </div>
  );
}
