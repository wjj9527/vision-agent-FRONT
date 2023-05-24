import React, { useContext } from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
import { StoreContext } from '@/pages/Editor/store';
const {MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock

interface IProps {
  id:string
}
const LayoutSetting:React.FC<IProps> = ({id})=>{
  const {state,} = useContext(StoreContext)
  const targetKey = id||state.renderTree.targetElementCheckedKey
  return <>
    <MarginAndPaddingBlock id={targetKey}/>
    <WidthAndHeightBlock id={targetKey}/>
  </>
}
export default LayoutSetting
