import React from 'react';
import {createUUID} from '@/pages/utils';
//基础容器
import BasicContainer from './container/BasicContainer'
//卡片组
import CardGroup from './element/CardGroup';

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

//setting组件集
const setting = {
  BasicContainer:BasicContainer.Setting,
  CardGroup:CardGroup.Setting
}

//渲染组件集
const component = {
  BasicContainer:BasicContainer.component,
  CardGroup:CardGroup.component,
}
//组件默认值集合
const defaultValue = {
  BasicContainer:BasicContainer.defaultValue,
  CardGroup:CardGroup.defaultValue,
}
//组件列表
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
  },
  {
    label:'组件',
    value:'element',
    items:[
      {
        label:'卡片组',
        value:'CardGroup',
        searchEKEY:'KPZ',
        icon:'icon-yemiankuangjia_o',
        component:CardGroup.component
      }
    ]
  }
]

const getDefaultElementData = (type:keyof typeof defaultValue,props:object={})=>{
  const value = {...defaultValue[type]}
  const id = createUUID()
  Object.assign(value,{id},props)
  return value
}

export {
  setting,
  component,
  plugin,
  getDefaultElementData,
  pluginItemType,
  pluginType
}
