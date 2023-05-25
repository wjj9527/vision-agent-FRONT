import React from 'react';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
const {LayoutBlock,MarginAndPaddingBlock,WidthAndHeightBlock} = LayoutSettingBlock
const LayoutSetting :React.FC =()=>{
  return <>
    <LayoutBlock/>
    <MarginAndPaddingBlock/>
    <WidthAndHeightBlock/>
  </>
}

export default LayoutSetting
