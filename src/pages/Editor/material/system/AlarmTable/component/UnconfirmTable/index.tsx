import React, { useContext, useEffect, useState } from 'react';
import {Table,Button,Modal,Form} from 'antd'
import { StoreContext } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import axios from 'axios';


interface IProps {
  id:string,
}
const  UnconfirmedTable:React.FC<IProps> =({id})=>{
  const [dataSource,setDataSource] = useState([])
  const [dialogVisible,setDialogVisible] = useState(false)
  const [targetCheckedItem,setTargetCheckedItem] = useState<any>({})
  const {state,} = useContext(StoreContext)
  const {schema} = state.renderTree
  const {element} = findContainerById(id,schema)
  //@ts-ignore
  const {isOnline,url} = element?.data?.onlineXHR?.unconfirmed||{}
  //@ts-ignore
  const defaultData = element?.data?.datasource?.unconfirmed
  const handleRowBtnClick = (item:any)=>{
    console.log(item)
    setDialogVisible(true)
    setTargetCheckedItem(item)
  }
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
    {
      title: '操作',
      dataIndex: 'actions',
      key: 'actions',
      render:(_:any,record:any)=><a onClick={handleRowBtnClick.bind(this,record)}>确认</a>
    },
  ];
  const getDataSource = ()=>{
    if (isOnline) {
      axios({
        method:'get',
        url,
      }).then(res=>{
        setDataSource(res.data.data)
      })
    }else{
      setDataSource(defaultData?.data)
    }
  }
  useEffect(()=>{
    getDataSource()
  },[isOnline,url,defaultData])
  return <>
    <Table
      sticky
      rowKey={record => record.id}
      scroll={{x:true,y:280}}
      dataSource={dataSource}
      columns={columns}/>
    <Modal title="报警确认" onOk={setDialogVisible.bind(this,false)} open={dialogVisible} onCancel={setDialogVisible.bind(this,false)}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="报警时间">
          {targetCheckedItem.waringTime}
        </Form.Item>
        <Form.Item label="所在楼层">
          {targetCheckedItem.floorName}
        </Form.Item>
        <Form.Item label="点位名">
          {targetCheckedItem.gatewayPointName}
        </Form.Item>
        <Form.Item label="正常范围">
          {targetCheckedItem.rangeValue}
        </Form.Item>
        <Form.Item label="报警类型">
          {targetCheckedItem.waringTypeName}
        </Form.Item>
        <Form.Item label="报警设备">
          {targetCheckedItem.waringDeviceName}
        </Form.Item>
        <Form.Item label="报警值">
          {targetCheckedItem.waringValue}
        </Form.Item>
      </Form>
    </Modal>
  </>
}

export default UnconfirmedTable
