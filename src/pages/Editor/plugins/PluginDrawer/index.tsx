import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { useContext } from 'react';
import Component from './components/Component'

export default function():(false | JSX.Element|any){
  const { state,dispatch} = useContext(StoreContext);

  const { pluginCurrentTarget, pluginDrawerVisible,pluginDrawerFixed }:
    { pluginCurrentTarget: keyof typeof renderModules; pluginDrawerVisible: boolean;pluginDrawerFixed: boolean } = state.plugin;

  const renderModules = {
    outline:{
      label:'大纲树',
      component:null,
    },
    component:{
      label:'组件',
      component:null,
    },
    page:{
      label:'页面',
      component:null,
    },
    json:{
      label:'JSON',
      component:null,
    },
  }
  const currentTargetData = renderModules[pluginCurrentTarget]
  const handleClose = ()=>{
    dispatch({type:TYPES.UPDATE_PLUGIN_DRAWER_VISIBLE,value:false})
    dispatch({type: TYPES.UPDATE_PLUGIN_DRAWER_TARGET, value: '' })
    dispatch({type: TYPES.UPDATE_PLUGIN_DRAWER_FIXED, value: false })
  }
  const handleFixed =()=>{
    // pluginDrawerFixed
    dispatch({type: TYPES.UPDATE_PLUGIN_DRAWER_FIXED, value: !pluginDrawerFixed })
    // console.log(pluginDrawerFixed)
  }
  const FixedBtn = ()=>{
    return (
      pluginDrawerFixed?
      <i className='iconfont icon-a-Removefixed-outlined' />: <i className='iconfont icon-Fixed-outlined'/>
    )
  }
  return pluginDrawerVisible&&(
    <div className={pluginDrawerFixed?'plugin-drawer-content fixed':'plugin-drawer-content'}>
      <div className='plugin-drawer-title'>
        <span className='title-text'>{currentTargetData.label}</span>
        <div className='handle-group'>
          <div className='btn' onClick={handleFixed}>
            <FixedBtn/>
          </div>
          <div className='btn' onClick={handleClose}>
            <i className='iconfont icon-close' />
          </div>
        </div>
      </div>
      <div className="plugin-drawer-box">
        <Component/>
      </div>
    </div>
  );
};
