import React, { useContext } from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
import { StoreContext } from '@/pages/Editor/store';
const {LayoutBlock,MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock

export default ()=>{
  const {state,} = useContext(StoreContext)
  const id = state.renderTree.targetElementCheckedKey
  return <>
    <LayoutBlock id={id}/>
    <MarginAndPaddingBlock id={id}/>
    <WidthAndHeightBlock id={id}/>
  </>
}
