import React from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
const {LayoutBlock,MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock

export default ()=>{
  return <>
    {/*<LayoutSettingBlock/>*/}
    {/*<FlexBlock/>*/}
    <LayoutBlock/>
    <MarginAndPaddingBlock/>
    <WidthAndHeightBlock/>
  </>
}
