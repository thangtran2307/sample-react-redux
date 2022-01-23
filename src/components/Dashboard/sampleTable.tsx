import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import RoutingPath from '../Routing/routingPath';
import { Sample } from './dashboardInterfaces';

interface SampleTableProps {
  sampleList: Sample[];
}

export default function SampleTable(props: SampleTableProps) {
  const { sampleList } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: ((text: any) => (
        <Link to={`${RoutingPath.Sample}/${text}`}>
          {text}
        </Link>
      )),
    },
    {
      title: 'Field One',
      dataIndex: 'fieldOne',
      key: 'fieldOne',
    },
    {
      title: 'Field One',
      dataIndex: 'fieldOne',
      key: 'fieldOne',
    },
  ];

  const dataSource = sampleList
    .map((item) => (
      {
        key: item.id,
        id: item.id,
        fieldOne: item.fieldOne,
        fieldTwo: item.fieldTwo,
      }
    ));

  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}
