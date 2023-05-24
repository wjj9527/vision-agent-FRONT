import React, { useContext, useEffect, useState } from 'react';
import {Input,Select,Switch,Checkbox,} from 'antd'
import './style.less'
import {
  chartTypeOptions,
  chartDisplayModeOptions,
  legendXOptions,
  legendYOptions,
  lineStyleTypeOptions,
  gridReviewOptions,
  legendLayoutOptions,
  AttributeType
} from './params';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
interface IProps {
  id?:string,
}

const Attribute:React.FC<IProps> = ({id})=>{
  const {state,dispatch} = useContext(StoreContext)
  //若有ID则采用当前ID对应数据，反之采用targetId
  const currentTargetId = id||state.renderTree.targetElementCheckedKey
  // @ts-ignore
  const currentElement = findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.attribute||{}
  const [defaultValue,setDefaultValue] = useState<AttributeType>(currentElement)
  useEffect(()=>{
    // @ts-ignore
    setDefaultValue(findContainerById(currentTargetId,state.renderTree.schema)?.element?.data?.attribute||{})
  },[currentTargetId])
  //@ts-ignore
  const setSchemaData = (e: string|boolean|Array, type: keyof defaultValue|string)=>{
    let props = {...defaultValue}
    //@ts-ignore
    props[type] = e
    setDefaultValue(props)
    dispatch({type:TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID,id:currentTargetId,data:{attribute:props}})
  }

  // @ts-ignore
  return <div className="charts-attribute">
    <div className='inline-block-item'>
      <div className='label'>图表标题</div>
      <div className='content'>
        {/*@ts-ignore*/}
        <Input value={defaultValue.title} placeholder="请输入标题" onInput={e=>setSchemaData(e.target.value,'title')}/>
      </div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>图表类型</div>
      <div className='content'>
        <Select placeholder="请选择图表类型" onChange={e=>setSchemaData(e,'chartType')} value={defaultValue.chartType} options={chartTypeOptions} className="fill-select"/>
      </div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>柱形方向</div>
      <div className='content'>
        <Select placeholder="请选择柱形方向" onChange={e=>setSchemaData(e,'chartDisplayMode')} value={defaultValue.chartDisplayMode} options={chartDisplayModeOptions} className="fill-select"/>
      </div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>坐标标题</div>
      <div className='content'>
        <div className='group'>
          {/*@ts-ignore*/}
          <Input placeholder="X" onInput={e=>setSchemaData(e.target.value,'offsetXTitle')} value={defaultValue.offsetXTitle} className="offset"/>
          {/*@ts-ignore*/}
          <Input placeholder="Y" onInput={e=>setSchemaData(e.target.value,'offsetYTitle')} value={defaultValue.offsetYTitle} className="offset"/>
        </div>
      </div>
    </div>
    <div className='inline-block-item'>
      <div className='label'>图例</div>
      <div className='content'>
        <Switch style={{width:40}} checked={defaultValue.legendVisible} onChange={e=>setSchemaData(e,'legendVisible')}/>
      </div>
    </div>
    {
      defaultValue.legendVisible&&(
        <>
          <div className='inline-block-item'>
            <div className='label'>图例排列</div>
            <div className='content'>
              <Select placeholder="布局方式" onChange={e=>setSchemaData(e,'legendLayout')} value={defaultValue.legendLayout} options={legendLayoutOptions} className="fill-select"/>
            </div>
          </div>
          <div className='inline-block-item'>
            <div className='label'>图例位置</div>
            <div className='content'>
              <div className='group'>
                <Select placeholder="水平" onChange={e=>setSchemaData(e,'legendX')} value={defaultValue.legendX} options={legendXOptions} className="offset"/>
                <Select placeholder="垂直" onChange={e=>setSchemaData(e,'legendY')} value={defaultValue.legendY} options={legendYOptions} className="offset"/>
              </div>
            </div>
          </div>
        </>
      )
    }
    <div className='inline-block-item'>
      <div className='label'>网格</div>
      <div className='content'>
        <Checkbox.Group onChange={e=>setSchemaData(e,'gridVisible')} value={defaultValue.gridVisible} options={gridReviewOptions}/>
      </div>
    </div>
    {
      //@ts-ignore
      defaultValue?.gridVisible?.includes('x')&&(
        <div className='inline-block-item'>
          <div className='label'>水平网格线</div>
          <div className='content'>
            <div className='group'>
              <Select placeholder="样式"  className="offset" onChange={e=>setSchemaData(e,'gridXLineStyleType')} value={defaultValue.gridXLineStyleType} options={lineStyleTypeOptions}/>
              <input type="color" className="offset" value={defaultValue.gridXLineStyleColor} onChange={e=>setSchemaData(e.target.value,'gridXLineStyleColor')}/>
            </div>
          </div>
        </div>
      )
    }
    {
      //@ts-ignore
      defaultValue.gridVisible?.includes('y')&&(
        <div className='inline-block-item'>
          <div className='label'>垂直网格线</div>
          <div className='content'>
            <div className='group'>
              <Select placeholder="样式" className="offset" onChange={e=>setSchemaData(e,'gridYLineStyleType')} value={defaultValue.gridYLineStyleType} options={lineStyleTypeOptions}/>
              <input type="color" className="offset" value={defaultValue.gridYLineStyleColor} onChange={e=>setSchemaData(e.target.value,'gridYLineStyleColor')}/>
            </div>
          </div>
        </div>
      )
    }
    <div className='inline-block-item'>
      <div className='label'>数据标签</div>
      <div className='content'>
        <Switch style={{width:40}} checked={defaultValue.dataTag} onChange={e=>setSchemaData(e,'dataTag')}/>
      </div>
    </div>
  </div>
}

export default Attribute
