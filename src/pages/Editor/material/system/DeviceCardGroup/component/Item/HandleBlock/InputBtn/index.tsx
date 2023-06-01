import React, { useState } from 'react';
import {Modal,Input} from 'antd'
const InputBtn:React.FC =()=>{
  const [visible,setVisible] = useState(false)

  return <>
    <div className="input-btn-container" onClick={setVisible.bind(this,true)}>
      输入
    </div>
    <Modal title="输入" open={visible} okText="确认" cancelText="取消" onOk={setVisible.bind(this,false)} onCancel={setVisible.bind(this,false)}>
      <Input placeholder="请输入下发参数"/>
    </Modal>
  </>
}

export default InputBtn
