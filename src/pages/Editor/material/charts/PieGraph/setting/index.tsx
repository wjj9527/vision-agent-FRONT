import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import DataSetting from './DataSetting'
import LayoutSetting from './LayoutSetting'
import Attribute from './Attribute';

const settingProps = [
  {
    label:'布局',
    value:'layout',
    component:LayoutSetting
  },
  {
    label:'属性',
    value:'attribute',
    component:Attribute
  },
  {
    label:'数据',
    value:'data',
    component:DataSetting
  },
]
const Setting:React.FC = ()=>{
  return <SettingWrapper options={settingProps}/>
}
export default Setting
