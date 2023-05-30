import React from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import {Tabs,TabsProps} from 'antd'
import ConfirmTable from './ConfirmTable'
import UnconfirmedTable from './UnconfirmTable';
import SearchHandle from './SearchHandle';
import './style.less';

interface ElementProps {
  id: string,
  type: string,
  label: string,
  className?: string,
  data: DataType
}
interface DataType {
  style: object,
  datasource:any
}

const BarGraph: React.FC<ElementProps> = ({ id, label, data }) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `未确认`,
      children: <UnconfirmedTable id={id}/>,
    },
    {
      key: '2',
      label: `已确认`,
      children: <ConfirmTable id={id}/>,
    },
  ]
  return <ElementBody id={id} label={label}>
    <div className="alarm-table">
      <Tabs items={items} tabBarExtraContent={<SearchHandle/>}/>
    </div>
  </ElementBody>;
};
export default BarGraph;
