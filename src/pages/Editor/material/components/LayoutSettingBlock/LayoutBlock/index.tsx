import React, { useContext, useEffect, useState } from 'react';
import '../style.less';
import { Select, InputNumber } from 'antd';
import {TYPES} from '@/pages/Editor/store';
import {findContainerById} from '@/pages/utils/findContainerById';
import { StoreContext } from '@/pages/Editor/store';
import {
  displayOptions,
  flexDirectionOptions,
  justifyContentOptions,
  alignItemOptions,
  flexWrapOptions,
  Style,
  Container
} from '../params';

interface LayoutSettingBlockProps {
  id?:string
}
const LayoutBlock: React.FC<LayoutSettingBlockProps> = ({id}) => {
  const {state,dispatch} = useContext(StoreContext)
  //若有ID则采用当前ID对应数据，反之采用targetId
  const currentTargetId = id||state.renderTree.targetElementCheckedKey
  // @ts-ignore
  const currentElement = findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.style||{}
  const [defaultValue,setDefaultValue] = useState<any>(currentElement)

  useEffect(()=>{
    //@ts-ignore
    const elementData = findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.style||{}
    setDefaultValue(elementData)
  },[currentTargetId])

  const setSchemaData = (e:string,type:keyof typeof defaultValue)=>{
    let props = {...defaultValue}
    props[type] = e
    setDefaultValue(props)
    dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:currentTargetId,data:{style:props}})
  }

  return <div className='layout-setting-block'>
    <div className='layout-select-block'>
      <div className='layout-select-block-item'>
        <div className='label'>布局模式</div>
        <div className='content'>
          <Select className='select' value={defaultValue.display} options={displayOptions} placeholder='选择布局模式' onChange={(e)=>setSchemaData(e,'display')}/>
        </div>
      </div>
      {
        defaultValue.display==='flex'&&
        (<>
          <div className='layout-select-block-item'>
            <div className='label'>主轴方向</div>
            <div className='content'>
              <Select className='select' value={defaultValue.flexDirection} options={flexDirectionOptions} placeholder='选择主轴方向' onChange={(e)=>setSchemaData(e,'flexDirection')}/>
            </div>
          </div>
          <div className='layout-select-block-item'>
            <div className='label'>主轴对齐</div>
            <div className='content'>
              <Select className='select' value={defaultValue.justifyContent} options={justifyContentOptions} placeholder='选择主轴对齐方式' onChange={(e)=>setSchemaData(e,'justifyContent')}/>
            </div>
          </div>
          <div className='layout-select-block-item'>
            <div className='label'>辅轴对齐</div>
            <div className='content'>
              <Select className='select' value={defaultValue.alignItems} options={alignItemOptions} placeholder='选择辅轴对齐方式' onChange={(e)=>setSchemaData(e,'alignItems')}/>
            </div>
          </div>
          <div className='layout-select-block-item'>
            <div className='label'>换行</div>
            <div className='content'>
              <Select className='select' value={defaultValue.flexWrap} options={flexWrapOptions} placeholder='选择换行方式' onChange={(e)=>setSchemaData(e,'flexWrap')}/>
            </div>
          </div>
        </>)
      }
    </div>
  </div>;
};

export default LayoutBlock;
