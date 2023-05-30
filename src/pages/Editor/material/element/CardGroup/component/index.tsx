import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import { StoreContext } from '@/pages/Editor/store';
import {Popover} from 'antd'
import './style.less'

interface ElementProps {
  id: string ,
  children?: ReactNode[],
  type: string,
  label:string,
  onMove?: Function | null | undefined,
  className?: string,
  data:DataType
}
interface DataType {
  style:object,
  datasource:object
}
const CardGroup:React.FC<ElementProps> = (props)=>{
  console.log(props)
  const [groupList,setGroupList] = useState<any>([])
  const {state,} = useContext(StoreContext)

  const scrollRef = useRef(null)
  const {id,label,data} = props
  const {style,datasource} = data
  useEffect(()=>{
    //@ts-ignore
    setGroupList(datasource.data.deviceFault)
  },[])
  const handleScroll = (p:boolean)=>{
    if (scrollRef.current) {
      //@ts-ignore
      p?scrollRef.current?.lastChild?.scrollIntoView({ behavior: "smooth" }):scrollRef.current?.firstChild?.scrollIntoView({ behavior: "smooth" })
    }
  }
  const PopoverContent:React.FC<{count:number,faultCount:number}> = ({count,faultCount})=>{
    return <>
      <div className='count'>总数：{count}</div>
      <div className='count'>故障：{faultCount}</div>
    </>
  }
  return <ElementBody style={style} id={id} label={label}>
    <div className="card-group-list">

      <div className='arrow-btn left' onClick={handleScroll.bind(this,false)}>
        <i className='iconfont icon-arrowleft'/>
      </div>
      <div className='scroll-content' ref={scrollRef}>
        {groupList.map((item:any)=>(
          <Popover placement="top" content={<PopoverContent count={item.count} faultCount={item.faultCount}/>} trigger="hover">
            <div className='card'>
              <div className='text'>{item.text}</div>
              <div className='title'>{item.name}</div>
            </div>
          </Popover>
          ))}
      </div>
      <div className='arrow-btn right' onClick={handleScroll.bind(this,true)}>
        <i className='iconfont icon-arrowright'/>
      </div>
    </div>
  </ElementBody>



}
export default CardGroup
