import React, { useContext, useState } from 'react';
import {Drawer,Button,Input} from 'antd'
import './style.less'
import { StoreContext, TYPES } from '@/pages/Editor/store';
const {Search} = Input
const ElementSelection:React.FC = ()=>{
  const {state,dispatch} = useContext(StoreContext)
  const [selectValue,setSelectValue] = useState([])
  // console.log(state)
  const {pluginDrawerElementSelectionVisible} = state.plugin
  const handleClose = ()=>{
    dispatch({type:TYPES.UPDATE_PLUGIN_DRAWER_ELEMENT_SELECTION_VISIBLE_STATUS,value:false})
    setSelectValue([])
  }


  return <Drawer
    title="选择组件"
    placement="left"
    width={500}
    onClose={handleClose}
    open={pluginDrawerElementSelectionVisible}
  >
    <div className="drawer-inner-container">
      <div className='drawer-inner-header'>
        <Search/>
      </div>
      <div className='drawer-inner-content'>

      </div>
      <div className='drawer-inner-footer'>
        <Button  type="primary" className="a-btn">
          <div className='btn-text'>确认</div>
        </Button>
        <Button >
          <div className='btn-text'>取消</div>
        </Button>
      </div>
    </div>
  </Drawer>
}

export default ElementSelection
