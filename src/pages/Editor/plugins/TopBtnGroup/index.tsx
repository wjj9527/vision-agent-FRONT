import React, { useContext } from 'react';
import "./style.less"
import { StoreContext,TYPES } from '@/pages/Editor/store';
import {Button} from 'antd'
import { updateCurrentTargetSchema } from '@/http/api/editor';
const TopBtnGroup:React.FC = ()=>{
  const {state,dispatch} = useContext(StoreContext)
  const schema = state.renderTree.schema
  const pluginPageDefaultData = state.plugin.pluginPageDefaultData
  const foldStatus = state.plugin.pluginSettingFold
  const btnIcon = foldStatus?<i className='iconfont icon-zhedie-zhankai'/>:<i className='iconfont icon-zhedie-shouqi'/>
  const handleSaveSchema = ()=>{
    const schemaStr = JSON.stringify(schema)
    const {id} = pluginPageDefaultData
    updateCurrentTargetSchema({schema:schemaStr,menuId:id}).then(res=>{

    })
  }
  return <div className="top-btn-group">
    <Button  type="primary" onClick={handleSaveSchema}>保存</Button>
    <div className='fold-btn' onClick={dispatch.bind(this,{type:TYPES.UPDATE_PLUGIN_SETTING_FOLD,value:!foldStatus})}>
      {btnIcon}
    </div>
  </div>
}
export default TopBtnGroup
