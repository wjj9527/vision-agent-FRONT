import {useDrag} from 'react-dnd'
const Test2Element = ()=>{
  return <div>test2</div>
}
export  default ()=>{
  const [{isDragging},ref] = useDrag(()=>({
    type:'template',
    item:{title:'test1',template:'image',element:<Test2Element/>,type:'wrapper'},
    collect:(monitor)=>({
      isDragging:monitor.isDragging()
    })
  }),)
  return <div id='drag' ref={ref} style={{height:80,width:80,border:'1px solid #dddddd'}}>
    TEST2
  </div>
}
