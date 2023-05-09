import React from 'react';
import {Button} from 'antd'
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
const Item:React.FC = ()=>{
  return <div className="children-setting-item">
    <div className='item-title'>
      <div className='title-text'>测试</div>
      <div className='handle'>
        <Button type="link" className="btn">
          选中
        </Button>
        <Button type="link" className="btn" danger>
          删除
        </Button>
      </div>
    </div>
    <div className='item-content'>
      <LayoutSettingBlock/>
    </div>
  </div>
}
export default Item
