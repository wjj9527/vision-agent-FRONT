import React, { useContext, useEffect, useState } from 'react';
import {Table} from 'antd'
import { StoreContext } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import axios from 'axios';

const columns = [
  {
    title: '报警时间',
    dataIndex: 'waringTime',
    key: 'waringTime',
  },
  {
    title: '报警类型',
    dataIndex: 'waringTypeName',
    key: 'waringTypeName',
  },
  {
    title: '报警设备',
    dataIndex: 'waringDeviceName',
    key: 'waringDeviceName',
  },
  {
    title: '网关点位名',
    dataIndex: 'gatewayPointName',
    key: 'gatewayPointName',
  },
  {
    title: '报警值',
    dataIndex: 'waringValue',
    key: 'waringValue',
  },
  {
    title: '正常范围',
    dataIndex: 'rangeValue',
    key: 'rangeValue',
  },
];
interface IProps {
  id:string,
}
const  UnconfirmedTable:React.FC<IProps> =({id})=>{
  const [dataSource,setDataSource] = useState([])
  // const [columns,setColumns] = useState([])
  const {state,dispatch} = useContext(StoreContext)
  const {schema} = state.renderTree
  const {element} = findContainerById(id,schema)
  //@ts-ignore
  const {isOnline,url} = element?.data?.onlineXHR?.unconfirmed||{}
  //@ts-ignore
  const defaultData = element?.data?.datasource?.unconfirmed
  const getDataSource = ()=>{
    if (isOnline) {
      axios({
        method:'get',
        url,
      }).then(res=>{
        setDataSource(res.data.data||[])
      })
    }else{
      setDataSource(defaultData?.data||[])
    }
  }
  useEffect(()=>{
    getDataSource()
  },[isOnline,url,defaultData])
  // console.log(element)
  return <Table
    sticky
    scroll={{x:true,y:200}}
    dataSource={dataSource}
    columns={columns}/>
}

export default UnconfirmedTable
