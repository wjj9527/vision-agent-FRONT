import {useDrag} from 'react-dnd'
import React, { ReactNode } from 'react';
interface IProps {
  children:ReactNode,
  className?:string,
  value:string,
  label:string,
  component:Function,
}
const Item:React.FC<IProps>=(props)=>{
  const {className,children,value,label,component} = props
  console.log(props)
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
