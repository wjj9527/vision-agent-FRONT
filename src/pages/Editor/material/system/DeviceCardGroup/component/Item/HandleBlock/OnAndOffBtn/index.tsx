import React from 'react';
import {Modal} from 'antd'
const OnAndOffBtn:React.FC =()=>{
  const [modal,contextHolder] = Modal.useModal()
  const handleClick = (status:'on'|'off')=>{
    console.log(status)
    modal.confirm({
      title: '提示',
      content: '是否确认本次操作？',
      okText: '确认',
      cancelText: '取消',
    });
  }
  return <div className="on-and-off-btn-group">
    <div className='on-btn action-btn' onClick={handleClick.bind(this,'on')}>ON</div>
    <div className='off-btn action-btn' onClick={handleClick.bind(this,'off')}>OFF</div>
    {contextHolder}
  </div>
}
export default OnAndOffBtn
