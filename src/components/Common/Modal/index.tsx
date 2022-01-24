import React from 'react';
import { Modal } from 'antd';

interface ShowModalProps {
  title: any;
  content: any[];
  type: 'warning' | 'error' | 'success' | 'info';
}

export default function showModal(props: ShowModalProps) {
  const { title, content, type } = props;

  const body = (
    <div className="modal__body">
      {content.map((item) => (
        <div key={item}>
          {item}
          <br />
        </div>
      ))}
    </div>
  );

  const customTitle = (
    <div className="modal__title">{title}</div>
  );

  if (type === 'error') {
    Modal.error({
      title: customTitle,
      content: body,
      closable: true,
      centered: true,
      icon: null,
      className: 'modal',
      width: '100%',
    });
  } else if (type === 'info') {
    Modal.info({ title, content: body });
  } else if (type === 'warning') {
    Modal.warning({ title, content: body });
  } else {
    Modal.success({ title, content: body });
  }
}
