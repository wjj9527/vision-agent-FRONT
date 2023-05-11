import React, { useContext } from 'react';
import './style.less'
import Setting from '@/pages/Editor/material/container/BasicContainer/setting'
import { StoreContext } from '@/pages/Editor/store';
const SettingContainer:React.FC = ()=>{
  const {state,} = useContext(StoreContext)
  const pluginSettingFold = state.plugin.pluginSettingFold
  return pluginSettingFold?<div className="setting-container">
    <Setting/>
  </div>:<></>
}

export default SettingContainer
