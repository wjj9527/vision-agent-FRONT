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
interface IProps {
  id:string
}
const Setting:React.FC<IProps> = ({id})=>{
  return <SettingWrapper options={settingProps} id={id}/>
}
export default Setting
