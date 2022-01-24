import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import RoutingPath from '../Routing/routingPath';
import { Sample, SampleTableDataSource } from './dashboardInterfaces';

interface SampleTableProps {
  sampleList: Sample[];
  onDeleteRecordHandler: (sampleId: string) => void;
}

export default function SampleTable(props: SampleTableProps) {
  const { sampleList, onDeleteRecordHandler } = props;

  const columns: ColumnsType<SampleTableDataSource> = [
    {
      title: 'Id',
      dataIndex: 'sampleId',
      key: 'sampleId',
      render: ((text: any) => (
        <Link to={`${RoutingPath.Sample}/${text}`}>
          {text}
        </Link>
      )),
    },
    {
      title: 'Field One',
      dataIndex: 'fieldOne',
      key: 'sample.id',
    },
    {
      title: 'Field Two',
      dataIndex: 'fieldTwo',
      key: 'fieldTwo',
    },
    {
      title: '',
      key: 'deleteAction',
      render: ((text, record) => (
        <DeleteOutlined onClick={() => onDeleteRecordHandler(record.sampleId)} />
      )),
    },
  ];

  const dataSource: SampleTableDataSource[] = sampleList
    .map((item) => (
      {
        key: item.id,
        sampleId: item.id,
        fieldOne: item.fieldOne,
        fieldTwo: item.fieldTwo,
      }
    ));

  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}
