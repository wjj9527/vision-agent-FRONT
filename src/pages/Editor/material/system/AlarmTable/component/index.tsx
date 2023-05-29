import React from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import {Tabs,TabsProps} from 'antd'
import ConfirmTable from './ConfirmTable'
import SearchHandle from './SearchHandle';
import './style.less';

interface ElementProps {
  id: number | string,
  type: string,
  label: string,
  className?: string,
  data: DataType
}
interface DataType {
  style: object,
  datasource:any
}
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `未确认`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `已确认`,
    children: <ConfirmTable/>,
  },
]
const BarGraph: React.FC<ElementProps> = ({ id, label, data }) => {
  return <ElementBody id={id} label={label}>
    <div className="alarm-table">
      <Tabs items={items} tabBarExtraContent={<SearchHandle/>}/>
    </div>
  </ElementBody>;
};
export default BarGraph;
