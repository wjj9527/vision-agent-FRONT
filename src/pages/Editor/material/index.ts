//基础容器
import BasicContainer from './container/BasicContainer'
import React, { ReactNode } from 'react';

const setting = {
  BasicContainer:BasicContainer.setting
}

const component = {
  container:BasicContainer.component
}
interface pluginItemType {
  label:string,
  value:string,
  searchEKEY:string,
  icon?:string,
  component?:React.FC|any
}
interface pluginType{
  label:string,
  value:string,
  items:pluginItemType[]
}
const plugin:pluginType[] = [
  {
    label:'容器',
    value:'container',
    items:[
      {
        label:'基础容器',
        value:'BasicContainer',
        searchEKEY:'JCRQ',
        icon:'icon-yemiankuangjia_o',
        component:BasicContainer.component
      }
    ]
  }
]

export {
  setting,
  component,
  plugin,
  pluginItemType,
  pluginType
}
