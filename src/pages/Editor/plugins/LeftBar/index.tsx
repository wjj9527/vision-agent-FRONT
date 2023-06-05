import React, { useContext } from 'react';
import { Tooltip } from 'antd';
import './style.less';
import {StoreContext,TYPES} from '../../store';

const LeftBar:React.FC = ()=>{
  const {dispatch,state} = useContext(StoreContext)
  const {pluginCurrentTarget} = state.plugin
  const items = [
    {
      value:'outline',
      label:'大纲树',
      icon:'icon-fuhao-dagangshu'
    },
    {
      value:'component',
      label:'组件',
      icon:'icon-zujian'
    },
    {
      value:'page',
      label:'页面管理',
      icon:'icon-gongnengleixing'
    },
    {
      value:'group',
      label:'组合模板',
      icon:'icon-mobanguanli'
    },
    {
      value:'json',
      label:'schema',
      icon:'icon-10json'
    },
  ]
  const handleOnClick =(item:{value:string,label:string,icon:string})=>{
    dispatch({ type: TYPES.UPDATE_PLUGIN_DRAWER_TARGET, value: item.value })
    dispatch({ type: TYPES.UPDATE_PLUGIN_DRAWER_VISIBLE, value: true })
  }
  const itemsRenderDom = items.map(item => (
    <Tooltip title={item.label} placement='right' key={item.value}>
      <div className={`left-bar-item ${pluginCurrentTarget === item.value ? 'active' : ''}`}
           onClick={handleOnClick.bind(this,item)}>
        <i className={`iconfont ${item.icon}`} />
      </div>
    </Tooltip>));
  return <div className="left-bar-content">
    <div className='left-bar-box'>
      {itemsRenderDom}
    </div>
  </div>
}
export default LeftBar
