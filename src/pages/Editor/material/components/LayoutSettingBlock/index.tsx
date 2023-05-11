import React, { useContext, useEffect, useState } from 'react';
import './style.less';
import { Select, InputNumber } from 'antd';
import {TYPES} from '@/pages/Editor/store';
import {findContainerById} from '@/pages/utils/findContainerById';
import {
  displayOptions,
  flexDirectionOptions,
  justifyContentOptions,
  alignItemOptions,
  flexWrapOptions,
  valueSettingOptions,
  style
} from './params';
import { StoreContext } from '@/pages/Editor/store';
interface Container {
  label: string;
  id: string;
  data?:object,
  children?: Container[];
}
interface LayoutSettingBlockProps {
  id?:string
}
const LayoutSettingBlock: React.FC<LayoutSettingBlockProps> = ({id}) => {
  const {state,dispatch} = useContext(StoreContext)
  //若有ID则采用当前ID对应数据，反之采用targetId
  const currentTargetId = id||state.renderTree.targetElementCheckedKey
  // @ts-ignore
  const currentElement = findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.style||{}
  // console.log(currentElement,currentTargetId,state.renderTree.schema)
  const [defaultValue,setDefaultValue] = useState<any>(currentElement)

  useEffect(()=>{
    let elementData = {}
    //@ts-ignore
    elementData = findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.style||{}
    setDefaultValue(elementData)
    console.log(elementData)
  },[currentTargetId])

  const setSchemaData = (e:string,type:keyof typeof style)=>{
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
    <div className='distance-block'>
      <div className='margin-top-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.marginTop||''} onInput={(e:any)=>setSchemaData(e.target.value,'marginTop')}/>
      </div>
      <div className='margin-bottom-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.marginBottom||''} onInput={(e:any)=>setSchemaData(e.target.value,'marginBottom')}/>
        <span className='text'>margin</span>
      </div>
      <div className='margin-left-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.marginLeft||''} onInput={(e:any)=>setSchemaData(e.target.value,'marginLeft')}/>
      </div>
      <div className='margin-right-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.marginRight||''} onInput={(e:any)=>setSchemaData(e.target.value,'marginRight')}/>
      </div>
      <div className='padding-top-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.paddingTop||''} onInput={(e:any)=>setSchemaData(e.target.value,'paddingTop')}/>
      </div>
      <div className='padding-bottom-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.paddingBottom||''} onInput={(e:any)=>setSchemaData(e.target.value,'paddingBottom')}/>
        <span className='text'>padding</span>
      </div>
      <div className='padding-left-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.paddingLeft||''} onInput={(e:any)=>setSchemaData(e.target.value,'paddingLeft')}/>
      </div>
      <div className='padding-right-div layout-d-block'>
        <input type='number' className='d-input' maxLength={3} value={defaultValue.paddingRight||''} onInput={(e:any)=>setSchemaData(e.target.value,'paddingRight')}/>
      </div>
    </div>
    <div className='height-width-group'>
      <div className='line-block-item'>
        <div className='label'>宽度</div>
        <div className='content'><InputNumber value={defaultValue.width} className='input-number' placeholder="auto" onInput={(e)=>setSchemaData(e,'width')} /></div>
        <div className='select'><Select className='select' value={defaultValue.widthPrefix}  options={valueSettingOptions} onChange={(e)=>setSchemaData(e,'widthPrefix')} /></div>
      </div>
      <div className='line-block-item'>
        <div className='label'>高度</div>
        <div className='content'><InputNumber value={defaultValue.height} className='input-number' placeholder="auto" onInput={(e)=>setSchemaData(e,'height')}/></div>
        <div className='select'><Select className='select' value={defaultValue.heightPrefix}  options={valueSettingOptions} onChange={(e)=>setSchemaData(e,'heightPrefix')}/></div>
      </div>
    </div>
  </div>;
};

export default LayoutSettingBlock;
