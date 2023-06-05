import React, { ReactNode,useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import classNames from 'classnames';
import {Popover} from 'antd'
import './style.less'
import getAssets from './getAssets';
import axios from 'axios';
import { createUUID } from '@/pages/utils';

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
  datasource:object,
  attribute:any,
  onlineXHR:any
}
const CardGroup:React.FC<ElementProps> = (props)=>{
  const [groupList,setGroupList] = useState<any>([])
  const scrollRef = useRef(null)
  const {id,label,data} = props
  const {style,datasource,attribute,onlineXHR} = data
  const classNamesList  = classNames('card-group-list',`size-${attribute.size}`,`style-${attribute.style}`,`space-${attribute.space}`,)
  useEffect(()=>{
    //@ts-ignore
    if (onlineXHR&&onlineXHR.list.isOnline&&onlineXHR.list.url) {
      // console.log(onlineXHR)
      axios({
        method:'get',
        url:onlineXHR.list.url
      }).then(res=>{
        setGroupList(res.data.data.deviceFault)
      })
    }else{
      //@ts-ignore
      setGroupList(datasource.data.deviceFault)
    }
  },[datasource,onlineXHR])
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
    <div className={classNamesList} >
      <div className='arrow-btn left' onClick={handleScroll.bind(this,false)}>
        <i className='iconfont icon-arrowleft'/>
      </div>
      <div className='scroll-content' ref={scrollRef}>
        {groupList.map((item:any)=>(
          <Popover placement="top" key={createUUID()} content={<PopoverContent count={item.count} faultCount={item.faultCount} />} trigger="hover">
            <div className='card' style={{backgroundImage:`url(${getAssets(item.name)})`}} key={createUUID()} >
              {
                (attribute.badge&&!!item.faultCount)&&<div className='badge'/>
              }
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
