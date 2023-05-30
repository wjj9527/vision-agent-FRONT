import React, { useContext, useEffect, useRef, useState } from 'react';
import { Switch, Select } from 'antd';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import axios from 'axios';

interface IProps {
  id?: string,
  label?: string, //开关标签名
  type: string,  //接口类型
  module:string, // 接口模块名
  onChange?:Function,
}
const XHRHandleSwitch: React.FC<IProps> = ({ id, label,module, type, onChange}) => {
  const { state, dispatch } = useContext(StoreContext);
  const schema = state.renderTree.schema;
  const targetId = id || state.renderTree.targetElementCheckedKey;
  const { element } = findContainerById(targetId, schema);
  // @ts-ignore
  const { onlineXHR } = element?.data || {};
  const onlineXHRItem = onlineXHR ? (onlineXHR[type]?onlineXHR[type]:{isOnline:false,url:null}) : {isOnline:false,url:null};

  const [options,setOptions] = useState([])
  const handleSwitchChange = () => {
    dispatch({ type: TYPES.RENDER_TREE_UPDATE_INLINE_SWITCH_BY_ID, id: targetId, module: type });
  };
  const getXHROptions = (url:string)=>{
    axios({
      method:'get',
      url
    }).then(res=>{
      if (res.data.success === 0) {
        setOptions(res.data.data)
      }
    })
  }
  const handleSelect = (url:string)=>{
    dispatch({ type: TYPES.RENDER_TREE_UPDATE_INLINE_URL_BY_ID, id: targetId, url,module:type});
  }

  useEffect(() => {
    if (onlineXHRItem.isOnline) {
      // @ts-ignore
      const url = `/api/material/${element.value}/${module}/options`;
      getXHROptions(url)
    }
  }, [onlineXHRItem.isOnline]);
  useEffect(() => {
    if (onlineXHRItem.isOnline&&onlineXHRItem.url&&onChange) {
      axios({
        method:'get',
        url:onlineXHRItem.url
      }).then(res=>{
        onChange(onlineXHRItem.isOnline,res.data)
      })
    }
    if (!onlineXHRItem.isOnline) {
      if (onChange) {
        onChange(onlineXHRItem.isOnline,null)
      }
    }
  }, [onlineXHRItem.url,onlineXHRItem.isOnline]);
  return <>
    <div className='inline-block-item'>
      <div className='label'>{label}</div>
      <div className='content'><Switch checked={onlineXHRItem.isOnline} onChange={handleSwitchChange} /></div>
    </div>
    {
      onlineXHRItem.isOnline && (
        <div className='inline-block-item'>
          <div className='label'>接口列表</div>
          <div className='content'><Select className='fill-select' value={onlineXHRItem.url} options={options} placeholder="请选择接口" onChange={handleSelect}/></div>
        </div>
      )
    }
  </>;
};

export default XHRHandleSwitch;
