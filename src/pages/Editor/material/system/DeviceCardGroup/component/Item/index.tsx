import React, {useEffect } from 'react';
import getAssets from './getAssets';
import StatusBlock from './StatusBlock';
import HandleBlock from './HandleBlock';
interface IProps {
  source:object|any
}
const Item:React.FC<IProps> = ({source})=>{
  const {name,azFloor,typeName,deviceSetUpList,deviceStateList} = source
  useEffect(()=>{

  },[])
  return <div className="device-card-item" >
    <div className="device-title">
      {name}
    </div>
    <div className='status-and-address-container'>
      <div className='status-icon'>
        <img src={getAssets(deviceStateList)} alt='' className="icon-img" />
      </div>
      <div className='address-container'>
        <div className='text'><i className='iconfont icon-dizhi'/>{azFloor}</div>
        <div className='text'><i className='iconfont icon-gongnengleixing'/>{typeName}</div>
      </div>
    </div>
    <StatusBlock source={deviceStateList} />
    <HandleBlock source={deviceSetUpList}/>
  </div>
}

export default Item
