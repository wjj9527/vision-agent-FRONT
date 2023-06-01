import React, { ReactNode, useEffect, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import {Input,Button,Radio,Pagination,Select} from 'antd'
import './style.less'
import Item from './Item'
import { StoreContext } from '@/pages/Editor/store';
import axios from 'axios';
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
const DeviceCardList:React.FC<ElementProps> = (props)=>{
  const {id,label,data} = props
  const onlineXHR = data?.onlineXHR
  const isOnline = onlineXHR?.list?.isOnline
  //@ts-ignore
  const defaultDatasource = data.datasource
  const url = onlineXHR?.list?.url
  const [datasource,setDatasource] = useState([])
  const getDatasource = ()=>{
    if (url && isOnline) {
      axios({
        method:'get',
        url
      }).then(res=>{
        setDatasource(res.data.data)
      })
    }else{
      //@ts-ignore
      setDatasource(defaultDatasource.data)
    }
  }
  useEffect(()=>{
    getDatasource()
  },[onlineXHR,defaultDatasource])
  return <ElementBody className={{'device-card-list':true}} id={id} label={label}>
    <div className='search-handle'>
      <div className='search-inline-block-item'>
        <div className='label'>设备类型</div>
        <div className='content'><Input/></div>
      </div>
      <div className='search-inline-block-item'>
        <div className='label'>楼层</div>
        <div className='content'><Input/></div>
      </div>
      <div className='search-inline-block-item'>
        <div className='label'>设备名称</div>
        <div className='content'><Input/></div>
      </div>
      <div className='search-inline-block-item'>
        <Button type="primary" className="btn">搜索</Button>
        <Button type="primary" className="btn" ghost>重置</Button>
      </div>
      <div className='search-inline-block-item'>
        <div className='label'>设备运行状态</div>
        <div className='content'>
          <Radio.Group>
            <Radio value={1}>全部</Radio>
            <Radio value={2}>运行</Radio>
            <Radio value={3}>故障</Radio>
            <Radio value={4}>停止</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
    <div className='card-list-content'>
      {
        datasource.map((item:any)=><Item key={item.id} source={item}/>)
      }
    </div>
    <div className='pagination-content'>
      <Pagination
        total={500}
      />
    </div>
  </ElementBody>
}
export default DeviceCardList
