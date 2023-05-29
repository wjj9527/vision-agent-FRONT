import React from 'react';
import {createUUID} from '@/pages/utils';
//基础容器
import BasicContainer from './container/BasicContainer'
//卡片组
import CardGroup from './element/CardGroup';
//柱状图
import BarGraph from '@/pages/Editor/material/charts/BarGraph';
//饼状图
import PieGraph from '@/pages/Editor/material/charts/PieGraph'
//折线图
import LineGraph from '@/pages/Editor/material/charts/LineGraph'
//报警表格
import AlarmTable from '@/pages/Editor/material/system/AlarmTable'

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
  BasicContainer:BasicContainer.setting,
  CardGroup:CardGroup.setting,
  BarGraph:BarGraph.setting,
  PieGraph:PieGraph.setting,
  LineGraph:LineGraph.setting,
  AlarmTable:AlarmTable.setting,
}

//渲染组件集
const component = {
  BasicContainer:BasicContainer.component,
  CardGroup:CardGroup.component,
  BarGraph:BarGraph.component,
  PieGraph:PieGraph.component,
  LineGraph:LineGraph.component,
  AlarmTable:AlarmTable.component,
}
//组件默认值集合
const defaultValue = {
  BasicContainer:BasicContainer.defaultValue,
  CardGroup:CardGroup.defaultValue,
  BarGraph:BarGraph.defaultValue,
  PieGraph:PieGraph.defaultValue,
  LineGraph:LineGraph.defaultValue,
  AlarmTable:AlarmTable.defaultValue,
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
        icon:BasicContainer.defaultValue.icon,
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
        icon:CardGroup.defaultValue.icon,
        component:CardGroup.component
      }
    ]
  },
  {
    label:'统计',
    value:'charts',
    items:[
      {
        label:'柱状图',
        value:'BarGraph',
        searchEKEY:'ZZT',
        icon:BarGraph.defaultValue.icon,
        component:BarGraph.component
      },
      {
        label:'饼状图',
        value:'PieGraph',
        searchEKEY:'BZT',
        icon:PieGraph.defaultValue.icon,
        component:PieGraph.component
      },
      {
        label:'折线图',
        value:'LineGraph',
        searchEKEY:'ZXT',
        icon:LineGraph.defaultValue.icon,
        component:LineGraph.component
      }
    ]
  },
  {
    label:'系统组件',
    value:'system',
    items:[
      {
        label:'警报表格',
        value:'AlarmTable',
        searchEKEY:'JBBG',
        icon:AlarmTable.defaultValue.icon,
        component:AlarmTable.component
      }
    ]
  },
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
