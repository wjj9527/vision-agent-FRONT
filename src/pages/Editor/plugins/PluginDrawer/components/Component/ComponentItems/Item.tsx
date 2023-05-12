import {useDrag} from 'react-dnd'
import React, { ReactNode } from 'react';
import {pluginType,pluginItemType} from '@/pages/Editor/material';
interface IProps {
  children:React.ReactChildren|JSX.Element,
  className?:string,
  value:string,
  label:string,
  component:React.FC|any
}
const Item:React.FC<IProps>=(props)=>{
  const {className,children,value,label,component} = props
  // console.log(props)
  const [{isDragging},ref] = useDrag(()=>({
    type:'BOX',
    item:{title:label,value,type:'container',component},
    collect:(monitor)=>({
      isDragging:monitor.isDragging()
    })
  }),)
  return <div className={className} ref={ref} >
    {children}
  </div>
}

export default Item
