import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import LayoutSetting from '@/pages/Editor/material/Page/setting/LayoutSetting';
import ChildrenSetting from '@/pages/Editor/material/Page/setting/ChildrenSetting';
const settingProps =[
  {
    label:'布局',
    value:'layout',
    component:LayoutSetting
  },
  {
    label:'子块管理',
    value:'children',
    component:ChildrenSetting
  },
]
const Setting:React.FC = ()=>{
  return <SettingWrapper options={settingProps} id={'0'}/>
}
export default Setting
