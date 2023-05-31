import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import DataSetting from './DataSetting'
import Attribute from './Attribute';

const settingProps = [
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
interface IProps {
  id:string
}
const Setting:React.FC<IProps> = ({id})=>{
  return <SettingWrapper options={settingProps} id={id}/>
}
export default Setting
