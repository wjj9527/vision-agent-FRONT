import React from 'react';
import OnAndOffBtn from './OnAndOffBtn';
import InputBtn from './InputBtn';
import SliderBtn from './SliderBtn';
interface IProps{
  source:any[]|any
}

const HandleBlock:React.FC<IProps> = ({source})=>{
  return <div className="scroll-block hig">
    {
      source.map((item:any)=>(<div className='status-item'>
        <div className='status-label'><i className='iconfont icon-canshushezhi'/>{item.name}</div>
        <div className='status-content'>
          {item.typeName==="control"&&<OnAndOffBtn/>}
          {item.typeName==="number"&&<SliderBtn/>}
          {/*<OnAndOffBtn/>*/}
          {/*<InputBtn/>*/}
        </div>
      </div>))
    }
  </div>
}

export default HandleBlock
