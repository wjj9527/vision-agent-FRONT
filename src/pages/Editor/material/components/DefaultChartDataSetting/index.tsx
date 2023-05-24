import React, { useContext, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css';
import './style.less'
import { findContainerById } from '@/pages/utils/findContainerById';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import {Button} from 'antd'
// console.log(JSONEditor)
const DefaultChartDataSetting:React.FC = ()=>{
  const editorRef = useRef(null)
  const {state,dispatch} = useContext(StoreContext)
  const {schema,targetElementCheckedKey} = state.renderTree
  //@ts-ignore
  const datasource = findContainerById(targetElementCheckedKey,schema)?.element?.data?.datasource||{}
  let editor:any = null

  const editorSetting = ()=>{
    if (!editorRef.current) {
      return
    }
    editor = new JSONEditor(editorRef.current);
    editor.set(datasource)
  }
  const handleUpdate = ()=>{
    if (editor) {
      const json = editor.get()
      dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:targetElementCheckedKey,data:{datasource:json}})
    }
  }
  useEffect(()=>{
    editorSetting()
  },[])

  return <>
    <div ref={editorRef} className="editor-container">

    </div>
    <div className='btn-wrapper'>
      <Button type="primary" onClick={handleUpdate}>更新</Button>
    </div>
  </>
}
export default DefaultChartDataSetting
