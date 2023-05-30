import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import DataSetting from './DataSetting'


const settingProps = [
  {
    label:'数据',
    value:'data',
    component:DataSetting
  },
]
const Setting:React.FC = ()=>{
  //@ts-ignore
  return <SettingWrapper options={settingProps}/>
}
export default Setting
