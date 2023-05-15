import React from 'react';
//基础容器
import BasicContainer from './container/BasicContainer'
//卡片组
import CardGroup from './element/CardGroup';

const setting = {
  BasicContainer:BasicContainer.setting,
  CardGroup:CardGroup.setting
}

const component = {
  BasicContainer:BasicContainer.component,
  CardGroup:CardGroup.component,
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

export {
  setting,
  component,
  plugin,
  pluginItemType,
  pluginType
}
