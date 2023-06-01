import React, { useState } from 'react';
import {Modal,Slider} from 'antd'
import type { SliderMarks } from 'antd/es/slider';
const InputBtn:React.FC =()=>{
  const [visible,setVisible] = useState(false)
  const marks: SliderMarks = {
    16: '16°C',
    30: '30°C',
  };
  return <>
    <div className="input-btn-container" onClick={setVisible.bind(this,true)}>
      输入
    </div>
    <Modal title="输入" open={visible} okText="确认" cancelText="取消" onOk={setVisible.bind(this,false)} onCancel={setVisible.bind(this,false)}>
      <Slider marks={marks} defaultValue={16} min={16} max={30} />
    </Modal>
  </>
}

export default InputBtn
