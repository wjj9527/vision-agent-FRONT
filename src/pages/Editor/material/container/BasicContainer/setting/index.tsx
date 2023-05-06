import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import DataSetting from './DataSetting'
import LayoutSetting from './LayoutSetting'
import StyleSetting from './StyleSetting'
const settingProps = [
  {
    label:'布局',
    value:'layout',
    component:LayoutSetting
  },
  {
    label:'样式',
    value:'style',
    component:StyleSetting
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
