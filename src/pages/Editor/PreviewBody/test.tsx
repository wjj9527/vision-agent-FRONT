import { useDrag, useDrop } from 'react-dnd';

// @ts-ignore
export const Drop = ({children,handle})=>{
  const [{isOver},drop] = useDrop(()=>({
    accept:'card',
    collect:(monitor)=>({
      isOver:monitor.isOver()
    }),
    drop:handle
  }),)
  return <div id='drop' ref={drop}>
    {children}
  </div>
}
export const Drag = (props:any)=>{
  const {item} = props
  const [{isDragging},ref] = useDrag(()=>({
    type:'card',
    item,
    collect:(monitor)=>({
      isDragging:monitor.isDragging()
    })
  }),)
  return isDragging?<></>:<div id='drag' ref={ref}>
    {item.id}
  </div>
}
