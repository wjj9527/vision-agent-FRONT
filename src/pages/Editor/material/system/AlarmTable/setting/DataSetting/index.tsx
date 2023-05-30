import React, { useContext, useState } from 'react';
import DefaultDataSetting from '@/pages/Editor/material/components/DefaultDataSetting';
import XHRHandleSwitch from '@/pages/Editor/material/components/XHRHandleSwitch';
import { StoreContext } from '@/pages/Editor/store';
import './style.less'
import {Card} from 'antd'
interface IProps {
  id:string
}
const DataSetting:React.FC<IProps> = ({id})=>{
  const {state,dispatch} = useContext(StoreContext)
  return <>
    <Card title="已确认列表">
      <XHRHandleSwitch type="list" id={id} label={"线上数据"}/>
      <DefaultDataSetting id={id} module="confirmed"/>
    </Card>
    <Card title="未确认列表">
      <XHRHandleSwitch type="list" id={id} label={"线上数据"}/>
      <DefaultDataSetting id={id} module="confirmed"/>
    </Card>
  </>
}
export default DataSetting
