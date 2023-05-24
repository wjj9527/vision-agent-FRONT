import React from 'react';
import SettingWrapper from '@/pages/Editor/material/components/SettingWrapper'
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
const {LayoutBlock,MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock
const LayoutSetting :React.FC =()=>{
  return <>
    <LayoutBlock/>
    <MarginAndPaddingBlock/>
    <WidthAndHeightBlock/>
  </>
}
const settingProps =[
  {
    label:'布局',
    value:'layout',
    component:LayoutSetting
  },
]
const Setting:React.FC = ()=>{
  return <SettingWrapper options={settingProps} id={'0'}/>
}
export default Setting
