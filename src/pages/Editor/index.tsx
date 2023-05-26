import './style.less';
import LeftBar from './plugins/LeftBar';
import PluginDrawer from './plugins/PluginDrawer';
import PreviewBody from './PreviewBody';
import SettingContainer from '@/pages/Editor/plugins/Setting';
import TopBtnGroup from '@/pages/Editor/plugins/TopBtnGroup';
import ElementSelection from '@/pages/Editor/material/drawer/ElementSelection'
import { Store, StoreContext, TYPES } from './store';
import { DndProvider,} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useContext, useEffect } from 'react';
import { getPageSchema, menuListGetting } from '@/http/api/editor';
import defaultValue from '@/pages/Editor/material/Page/defaultValue';


const Editor:React.FC=()=> {
  const {state,dispatch} = useContext(StoreContext)
  //设置页面列表
  useEffect(()=>{
    menuListGetting().then(res=>{
      const { data } = res;
      dispatch({type:TYPES.SETTING_PLUGIN_MENU_LIST,value:data})
      const getFirstPage = (data:any)=> {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item.type.toString() === '2') {
            return item;
          } else if (item.children && item.children.length > 0) {
            const result:any = getFirstPage(item.children);
            if (result) {
              return result;
            }
          }
        }
      }
      const firstPage = getFirstPage(data)
      dispatch({type:TYPES.SETTING_PLUGIN_PAGE_DEFAULT_DATA,value:getFirstPage(data)})
      dispatch({type:TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY,value:'0'})
      getPageSchema({menuId:firstPage.id}).then(res=>{
        if (res?.data?.schema) {
          try {
            dispatch({type:TYPES.RENDER_TREE_SCHEMA_REPLACE,value:JSON.parse(res?.data?.schema)})
          }catch (err){
            dispatch({type:TYPES.RENDER_TREE_SCHEMA_REPLACE,value:defaultValue})
          }
        }else{
          dispatch({type:TYPES.RENDER_TREE_SCHEMA_REPLACE,value:defaultValue})
        }
      })
    })
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='page-wrapper editor-content'>
        {/*头部控制栏*/}
        <div className='top-bar'>
          <TopBtnGroup />
        </div>
        <div className='editor-container-inner'>
          {/*左侧插件栏*/}
          <div className='plugin-bar'>
            <LeftBar />
          </div>
          <div className='plugin-drawer'>
            <PluginDrawer />
          </div>
          {/*页面主体*/}
          <div className='page-render-content'>
            <PreviewBody />
          </div>
          {/*组件以及容器setting*/}
          <div className='setting-content'>
            <SettingContainer />
          </div>
          <ElementSelection/>
        </div>
      </div>
    </DndProvider>
  );
}

export default ()=>{
  return <Store>
    <Editor/>
  </Store>
}
