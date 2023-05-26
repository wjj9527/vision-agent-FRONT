import React from 'react';
import './style.less'
import MenuList from '@/pages/Preview/components/Menu';
import {Store} from '@/pages/Editor/store';
import Page from '@/pages/Editor/material/Page'
const Preview:React.FC =()=>{
  return <div className="preview-container-body">
    <div className='preview-header'></div>
    <div className='preview-content'>
      <div className='preview-menu-content'>
        <MenuList/>
      </div>
      <div className='preview-view'>
        <Page/>
      </div>
    </div>
  </div>
}

export default ()=>{
  return <Store>
    <Preview/>
  </Store>
}
