import React from 'react';
interface IProps{
  source:any[]|any
}
const StatusBlock:React.FC<IProps> = ({source})=>{
  const dotClassNames = {
    '0':'on',
    '1':'error',
    '--':'off'
  }
  return <div className='scroll-block'>
    {
      source.map((item:any)=>(
        <div className='status-item' key={item.id}>
          <div className='status-label'>
            <i className='iconfont icon-gongyezujian-yibiaopan'/>{item.name}
          </div>
          <div className='status-content'>
            {
              // @ts-ignore
              ["function","fault"].includes(item.typeName)?(<div className={`status-dot ${dotClassNames[item.pointsValue]}`}/>
              ):item.pointsValue
            }
          </div>
        </div>
      ))
    }
  </div>
}
export default StatusBlock
