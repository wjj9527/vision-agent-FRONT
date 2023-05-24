import React, { useContext, useEffect, useState } from 'react';
import './style.less'
import {setting} from '@/pages/Editor/material'
import { findContainerById } from '@/pages/utils/findContainerById';
import { StoreContext } from '@/pages/Editor/store';
import PageSetting from '@/pages/Editor/material/Page/setting'
const SettingContainer:React.FC = ()=>{
  const {state,} = useContext(StoreContext)
  const {pluginSettingFold} = state.plugin
  const {targetElementCheckedKey,schema} = state.renderTree
  const [currentElementType,setCurrentElementType] = useState('')
  useEffect(()=>{
    const {element} = findContainerById(targetElementCheckedKey,schema)
    if (element) {
      //@ts-ignore
      setCurrentElementType(element.value)
    }
  },[targetElementCheckedKey])
  //获取当前元素类型
  // @ts-ignore
  const Wrapper = setting[currentElementType]
  const settingElement = Wrapper?<Wrapper/>:<PageSetting/>
  return pluginSettingFold?<div className="setting-container">
    {settingElement}
  </div>:<></>
}

export default SettingContainer
