import React, { useState } from 'react';
import './style.less'
export interface SettingOption {
  label:string;
  value:string;
  component:React.FC|any
}

export interface IProps {
  options:SettingOption[],
  id:string
}

const Setting:React.FC<IProps>=({options,id})=>{

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
        {/*@ts-ignore*/}
        <Content id={id}/>
      </div>
    </div>
  </div>
}

export default Setting
