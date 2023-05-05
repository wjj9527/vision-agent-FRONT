import {useDrag} from 'react-dnd'
import React, { ReactNode } from 'react';
interface IProps {
  children:ReactNode,
  className?:string,
  value:string
}
const Item:React.FC<IProps>=(props)=>{
  const {className,children,value} = props
  console.log(props)
  const [{isDragging},ref] = useDrag(()=>({
    type:'BOX',
    item:{title:'test1',value,type:'wrapper'},
    collect:(monitor)=>({
      isDragging:monitor.isDragging()
    })
  }),)
  return <div className={className} ref={ref} >
    {children}
  </div>
}

export default Item
