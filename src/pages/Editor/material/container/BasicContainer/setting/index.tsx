import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
// import DataSetting from './DataSetting'
import LayoutSetting from './LayoutSetting'
// import StyleSetting from './StyleSetting'
import ChildrenSetting from './ChildrenSetting'
const settingProps = [
  {
    label:'布局',
    value:'layout',
    component:LayoutSetting
  },
  // {
  //   label:'样式',
  //   value:'style',
  //   component:StyleSetting
  // },
  // {
  //   label:'数据',
  //   value:'data',
  //   component:DataSetting
  // },
  {
    label:'子块管理',
    value:'children',
    component:ChildrenSetting
  },
]
interface IProps {
  id:string
}
const Setting:React.FC<IProps> = ({id})=>{
  return <SettingWrapper options={settingProps} id={id}/>
}

export default Setting
