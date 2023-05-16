import React, { useContext, useEffect, useState } from 'react';
import '../style.less';
import {TYPES} from '@/pages/Editor/store';
import {findContainerById} from '@/pages/utils/findContainerById';
import { StoreContext } from '@/pages/Editor/store';
interface LayoutSettingBlockProps {
  id?:string
}
const MarginAndPaddingBlock: React.FC<LayoutSettingBlockProps> = ({id}) => {
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
  </div>;
};

export default MarginAndPaddingBlock;
