import React, { useContext } from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
import { StoreContext } from '@/pages/Editor/store';
const {LayoutBlock,MarginAndPaddingBlock,WidthAndHeightBlock,OverflowBlock,FlexBlock} = LayoutSettingBlock

interface IProps {
  id:string
}
const LayoutSetting:React.FC<IProps> = ({id})=>{
  const {state,} = useContext(StoreContext)
  const targetKey = id||state.renderTree.targetElementCheckedKey
  return <>
    <LayoutBlock id={targetKey}/>
    <MarginAndPaddingBlock id={targetKey}/>
    <WidthAndHeightBlock id={targetKey}/>
    <OverflowBlock id={targetKey}/>
    <FlexBlock id={targetKey}/>
  </>
}
export default LayoutSetting
