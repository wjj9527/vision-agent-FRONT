import React, { ReactNode, useEffect, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import './style.less';
import getAssets from './getAssets';
import axios from 'axios';

interface ElementProps {
  id: string,
  children?: ReactNode[],
  type: string,
  label: string,
  className?: string,
  data: DataType
}

interface DataType {
  style: object,
  datasource: object,
  attribute: any,
  onlineXHR: any
}

const AlarmCardGroup: React.FC<ElementProps> = (props) => {
  const { data, id, label } = props;
  const { style,datasource,onlineXHR} = data;
  // @ts-ignore
  const [initData,setInitData] = useState(datasource.data)
  const isOnline = onlineXHR.list?.isOnline
  const onlineUrl = onlineXHR.list?.url
  console.log(data)
  useEffect(()=>{
    if(isOnline){
      axios({
        method:"get",
        url:onlineUrl
      }).then(res=>{
        // console.log(res.data.data)
        setInitData(res.data.data)
      })
    }else{
      // @ts-ignore
      setInitData(datasource.data)
    }
  },[datasource,isOnline])
  return <ElementBody style={style} id={id} label={label}>
    <div className="alarm-card-group">
      <div className='alarm-card'>
        <div className='alarm-content default-item'>
          <div className='label'>报警转化率</div>
          <div className='text'>{initData.conversionRate.value}%</div>
        </div>
        <div className='icon-content'><img src={getAssets("报警转化率")} alt='' /></div>
      </div>
      <div className='alarm-card'>
        <div className='alarm-content default-item'>
          <div className='label'>报警总数</div>
          <div className='text'>{initData.waringCount.value}</div>
        </div>
        <div className='icon-content'><img src={getAssets("报警总数")} alt='' /></div>
      </div>
      <div className='alarm-card'>
        <div className='alarm-content default-item'>
          <div className='label'>已消除报警</div>
          <div className='text'>{initData.eliminatedCount.value}</div>
        </div>
        <div className='icon-content'><img src={getAssets("已消除报警")} alt='' /></div>
      </div>
      <div className='alarm-card'>
        <div className='alarm-content default-item'>
          <div className='label'>未确认报警</div>
          <div className='text'>{initData.unconfirmedCount.value}</div>
        </div>
        <div className='icon-content'><img src={getAssets("未确认报警")} alt='' /></div>
      </div>
      <div className='alarm-card'>
        <div className='alarm-content default-item'>
          <div className='label'>已确认报警</div>
          <div className='text'>{initData.confirmedCount.value}</div>
        </div>
        <div className='icon-content'><img src={getAssets("已确认报警")} alt='' /></div>
      </div>
      <div className='alarm-card group'>
        <div className='alarm-content'>
          <div className='label'>报警高发楼层</div>
          <div className='text'>{initData.maxFloor.value}</div>
        </div>
        <div className='alarm-content'>
          <div className='label'>报警高发设备类型</div>
          <div className='text'>{initData.maxDevice.value}</div>
        </div>
      </div>
    </div>
  </ElementBody>
};
export default AlarmCardGroup;
