import React, { useContext, useEffect } from 'react';
import './style.less'
import MenuList from '@/pages/Preview/components/Menu';
import { Store, StoreContext, TYPES } from '@/pages/Editor/store';
import Page from '@/pages/Editor/material/Page'
const Preview:React.FC =()=>{
  const {dispatch} = useContext(StoreContext)
  useEffect(()=>{
    dispatch({type:TYPES.RENDER_TREE_UPDATE_IS_CAN_HANDLE,value:false})
  },[])
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
