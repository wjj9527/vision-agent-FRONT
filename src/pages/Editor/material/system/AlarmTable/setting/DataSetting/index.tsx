import React, { useContext, useRef, useEffect, useState } from 'react';
import DefaultDataSetting from '@/pages/Editor/material/components/DefaultDataSetting';
import XHRHandleSwitch from '@/pages/Editor/material/components/XHRHandleSwitch';
import { StoreContext } from '@/pages/Editor/store';
import jsonEditor from 'jsoneditor'
import './style.less'
import {Card} from 'antd'
interface IProps {
  id:string
}
let confirmedEditor:any,unconfirmedEditor:any

const DataSetting:React.FC<IProps> = ({id})=>{
  const confirmedEditorRef = useRef(null)
  const unconfirmedEditorRef = useRef(null)
  // const {state,dispatch} = useContext(StoreContext)
  const [confirmedShow,setConfirmedShow] = useState(false)
  const [unconfirmedShow,setUnconfirmedShow] = useState(false)
  useEffect(()=>{
    if (confirmedEditorRef.current) {
      confirmedEditor = new jsonEditor(confirmedEditorRef.current,{
        mode:'view',
        onChange:()=>false
      })
    }
    if (unconfirmedEditorRef.current) {
      unconfirmedEditor = new jsonEditor(unconfirmedEditorRef.current,{
        mode:'view',
        onChange:()=>false
      })
    }
  },[])
  const onConfirmedChange = (show:boolean,data:any)=>{
    if (confirmedEditor&&show) {
      confirmedEditor.set(data)
    }
    setConfirmedShow(show)
  }
  const onUnconfirmedChange = (show:boolean,data:any)=>{
    if (unconfirmedEditor&&show) {
      unconfirmedEditor.set(data)
    }
    setUnconfirmedShow(show)
  }
  return <>
    <Card title="已确认列表">
      <XHRHandleSwitch type="confirmed" module="list" id={id} label={"线上数据"} onChange={onConfirmedChange}/>
      <div style={{display:confirmedShow?'none':''}}>
        <DefaultDataSetting id={id} module="confirmed"/>
      </div>
      <div className='editor-container' ref={confirmedEditorRef} style={{display:confirmedShow?'':'none'}}/>
    </Card>
    <Card title="未确认列表">
      <XHRHandleSwitch type="unconfirmed" module="list" id={id} label={"线上数据"} onChange={onUnconfirmedChange}/>
      <div style={{display:unconfirmedShow?'none':''}}>
        <DefaultDataSetting id={id} module="unconfirmed"/>
      </div>
      <div className='editor-container' ref={unconfirmedEditorRef} style={{display:unconfirmedShow?'':'none'}}/>
    </Card>
  </>
}
export default DataSetting
