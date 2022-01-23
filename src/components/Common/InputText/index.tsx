import { Form, Input } from 'antd';
import React from 'react';

interface InputTextProps {
  name: any;
  label: any;
  maxLength: number;
  style?: any;
  hidden?: boolean;
  isCheckRequired: boolean;
  isDisabled?: boolean;
}

export default function InputText(props: InputTextProps) {
  const {
    name, label, isCheckRequired,
    maxLength, hidden, isDisabled,
    style,
    ...restFields
  } = props;

  let isRequired = isCheckRequired;
  if (hidden === true) {
    isRequired = false;
  }

  return (
    <Form.Item
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restFields}
      className="field"
      label={label}
      name={name}
      hidden={hidden}
      validateTrigger="onBlur"
      trigger="onBlur"
      valuePropName="defaultValue" // This one can make setFieldValue not work. Considering in future
      rules={[{ required: isRequired }]}
    >
      <Input
        autoComplete="off"
        disabled={isDisabled}
        maxLength={maxLength}
      />
    </Form.Item>
  );
}

InputText.defaultProps = {
  hidden: false,
  style: undefined,
  isDisabled: false,
};
