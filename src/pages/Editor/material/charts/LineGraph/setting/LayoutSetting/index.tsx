import React from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
const {MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock
export default ()=>{
  return <>
    {/*<LayoutBlock/>*/}
    <MarginAndPaddingBlock/>
    <WidthAndHeightBlock/>
  </>
}
