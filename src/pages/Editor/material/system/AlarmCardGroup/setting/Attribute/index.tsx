import React, { useContext } from 'react';
import {Select,Switch} from 'antd'
import {sizeOptions,spaceOptions,styleOptions,} from './params'
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
interface IProps {
  id:string
}
const Attribute:React.FC<IProps> = ({id})=>{
  const {state,dispatch} = useContext(StoreContext)
  const {schema,targetElementCheckedKey} = state.renderTree
  const targetKey = id||targetElementCheckedKey
  const {element} = findContainerById(targetKey,schema)
  //@ts-ignore
  const attribute = element?.data.attribute||{}

  const setSchemaData =(e:string|boolean,type:keyof  typeof attribute)=>{
    let props = {...attribute}
    props[type] = e
    dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:targetKey,data:{attribute:props}})
  }

  return <div className="attribute setting">
    <div className='inline-block-item'>
      <div className='label'>尺寸</div>
      <div className='content'><Select className="fill-select" onChange={e=>setSchemaData(e,'size')} placeholder="请选择尺寸" options={sizeOptions} value={attribute.size}/></div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>样式</div>
      <div className='content'><Select className="fill-select" onChange={e=>setSchemaData(e,'style')} placeholder="请选择样式" options={styleOptions} value={attribute.style} /></div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>卡片间隔</div>
      <div className='content'><Select className="fill-select" onChange={e=>setSchemaData(e,'space')} placeholder="请选择卡片间隔" options={spaceOptions} value={attribute.space} /></div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>显示徽记</div>
      <div className='content'><Switch checked={attribute.badge} onChange={e=>setSchemaData(e,'badge')}/></div>
    </div>
  </div>
}
export default Attribute
