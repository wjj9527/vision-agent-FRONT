import React, { useContext, useEffect, useRef } from 'react';
import {Switch} from 'antd'
import DefaultDataSetting from '@/pages/Editor/material/components/DefaultDataSetting';
import jsonEditor from 'jsoneditor';
import axios from 'axios';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
interface IProps {
  id:string
}
let editor:any = null
const DataSetting:React.FC<IProps> = ({id})=>{
  const editorRef = useRef(null)
  const {state,dispatch} = useContext(StoreContext)
  const {schema,targetElementCheckedKey} = state.renderTree
  const targetKey = id||targetElementCheckedKey
  const {element} = findContainerById(targetKey,schema)
  // @ts-ignore
  const isOnline = (element?.data?.onlineXHR?.list?.isOnline)
  const editorRegister = ()=>{

    //@ts-ignore
    const url = element?.data?.onlineXHR?.list.url
    console.log(url)
    if (url) {
      axios({
        method:'get',
        url
      }).then(res=>{
        // @ts-ignore
        editor.set(res.data)
      })
    }

  }
  const updateOnlineXHR = (isOnline:boolean)=>{
    //@ts-ignore
    let onlineXHR = element?.data?.onlineXHR
    //@ts-ignore
    const url = onlineXHR?.list?.url
    const list = {url,isOnline}
    dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:targetKey,data:{onlineXHR:{list}}})
  }
  useEffect(()=>{
    if (isOnline) {
      editorRegister()
    }
  },[isOnline])
  useEffect(()=>{
    if (editorRef.current) {
      // @ts-ignore
      editor = new jsonEditor(editorRef.current,{
        mode:'view',
        onChange:()=>false
      })
    }

  },[])
  return <div className="data-setting setting">
    <div className='inline-block-item'>
      <div className='label'>线上数据</div>
      <div className='content'><Switch checked={isOnline} onChange={updateOnlineXHR}/></div>
    </div>
    <div style={{display:isOnline?'none':''}}>
      <DefaultDataSetting id={id}/>
    </div>
    <div className='editor-container' ref={editorRef} style={{display:isOnline?'':'none'}} />
  </div>
}
export default DataSetting
