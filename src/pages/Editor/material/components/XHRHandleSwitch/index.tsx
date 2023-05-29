import React from 'react';
import {Switch,Select} from 'antd'
const XHRHandleSwitch:React.FC = ()=>{
  return <>
    <div className="inline-block-item">
      <div className='label'>线上数据</div>
      <div className='content'><Switch/></div>
    </div>
    <div className="inline-block-item">
      <div className='label'>选择接口</div>
      <div className='content'><Select className="fill-select"/></div>
    </div>
  </>
}

export default XHRHandleSwitch
