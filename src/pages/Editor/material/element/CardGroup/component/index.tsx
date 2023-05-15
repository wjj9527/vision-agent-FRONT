import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import { StoreContext } from '@/pages/Editor/store';
import mockJson from '@/pages/Editor/material/element/CardGroup/component/mockJson';
import './style.less'
interface ElementProps {
  id: number | string ,
  children?: ReactNode[],
  type: string,
  label:string,
  onMove?: Function | null | undefined,
  className?: string,
  data:DataType
}
interface DataType {
  style:object
}
const CardGroup:React.FC<ElementProps> = (props)=>{
  const [groupList,setGroupList] = useState(mockJson.deviceFault)
  const {state,} = useContext(StoreContext)
  const scrollRef = useRef(null)
  const {id,data,label} = props
  const {style} = data
  useEffect(()=>{

  })
  const handleScroll = (p:boolean)=>{
    if (scrollRef.current) {
      //@ts-ignore
      p?scrollRef.current?.lastChild?.scrollIntoView({ behavior: "smooth" }):scrollRef.current?.firstChild?.scrollIntoView({ behavior: "smooth" })
    }
  }
  return <ElementBody style={style} id={id} label={label}>
    <div className="card-group-list">

      <div className='arrow-btn left' onClick={handleScroll.bind(this,false)}>
        <i className='iconfont icon-arrowleft'/>
      </div>
      <div className='scroll-content' ref={scrollRef}>
        {groupList.map(item=>(<div className='card'>
          1
        </div>))}
      </div>
      <div className='arrow-btn right' onClick={handleScroll.bind(this,true)}>
        <i className='iconfont icon-arrowright'/>
      </div>
    </div>
  </ElementBody>



}
export default CardGroup
