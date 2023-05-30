import React, { useContext, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css';
import './style.less'
import { findContainerById } from '@/pages/utils/findContainerById';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import {Button} from 'antd'
interface IProps {
  id:string,
  module?:string
}
const DefaultDataSetting:React.FC<IProps> = ({id,module})=>{
  const editorRef = useRef(null)
  const {state,dispatch} = useContext(StoreContext)
  const {schema,targetElementCheckedKey} = state.renderTree
  //@ts-ignore
  let datasource = findContainerById(id||targetElementCheckedKey,schema)?.element?.data?.datasource||{}
  let editor:any = null

  const editorSetting = ()=>{
    if (!editorRef.current) {
      return
    }
    editor = new JSONEditor(editorRef.current,{
      // mode:'view',
      // onChange:()=>false
    });
    let data = datasource
    if(module){
      data = datasource[module]
    }
    editor.set(data)
  }
  const handleUpdate = ()=>{
    if (editor) {
      const json = editor.get()
      let data
      if(module){
        let source = JSON.parse(JSON.stringify(datasource))
        source[module] = json
        data = source
      }else{
        data = datasource
      }
      dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:id||targetElementCheckedKey,data:{datasource:data}})
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
export default DefaultDataSetting
