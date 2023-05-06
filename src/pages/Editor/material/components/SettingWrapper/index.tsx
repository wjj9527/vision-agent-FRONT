import React, { useState } from 'react';
import './style.less'
export interface SettingOption {
  label:string;
  value:string;
  component:React.FC
}

export interface IProps {
  options:SettingOption[]
}


const Setting:React.FC<IProps>=(props)=>{
  const {options} = props
  const [defaultItem] = options
  const [targetItem,setTargetItem] = useState<SettingOption>(defaultItem)
  const toggleGroup = options.map(item=>(
    <div className={`toggle-item ${targetItem.value===item.value?'active':''}`}
         key={item.value}
         onClick={setTargetItem.bind(this,item)}
    >{item.label}</div>))
  const Content = targetItem.component
  return <div className="setting-box">
    <div className='toggle-group'>
      {toggleGroup}
    </div>
    <div className='view-content'>
      <div className='view-scroll-inner'>
        <Content/>
      </div>
    </div>
  </div>
}

export default Setting
