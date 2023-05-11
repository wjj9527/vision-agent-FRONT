import React, { useContext } from 'react';
import "./style.less"
import { StoreContext,TYPES } from '@/pages/Editor/store';
const TopBtnGroup:React.FC = ()=>{
  const {state,dispatch} = useContext(StoreContext)
  const foldStatus = state.plugin.pluginSettingFold
  const btnIcon = foldStatus?<i className='iconfont icon-zhedie-zhankai'/>:<i className='iconfont icon-zhedie-shouqi'/>
  return <div className="top-btn-group">
    <div className='fold-btn' onClick={dispatch.bind(this,{type:TYPES.UPDATE_PLUGIN_SETTING_FOLD,value:!foldStatus})}>
      {btnIcon}
    </div>
  </div>
}
export default TopBtnGroup
