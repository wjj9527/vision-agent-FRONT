import React, { useContext,} from 'react';
import { deleteMenuItemById, menuListGetting,getPageSchema } from '@/http/api/editor';
import { Tree, Input, Button,  message } from 'antd';
import type { DataNode,} from 'antd/es/tree';
import CreateMenuDialog from '@/pages/Editor/plugins/PluginDrawer/dialog/CreateMenuDialog';
import TitleEdit from '@/pages/Editor/plugins/PluginDrawer/components/Component/MenuManagement/TitleEdit';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import defaultValue from '@/pages/Editor/material/Page/defaultValue';
interface TitleRenderType extends DataNode{
  type: number | string,
  title: string,
  parentId: number | string,

}
const { Search } = Input;

const MenuManagement: React.FC = () => {
  const { state,dispatch } = useContext(StoreContext);
  const renderTree = state.plugin.menuList
  const getMenuSource = () => {
    menuListGetting().then(res=>{
      dispatch({type:TYPES.SETTING_PLUGIN_MENU_LIST,value:res.data})
    })
  };

  const handleOnSearch = () => {

  };
  const handleDelete =(id:string|number)=>{
    deleteMenuItemById({id}).then(()=>{
      message.success('删除成功')
      getMenuSource()
    })
  }
  const handleOpenCreateMenuDialog = ({ parentId, parentType,}: { parentId: string | number, parentType: null | number | string }) => {
    const type = !parentType ? null : 2;
    const title = '';
    dispatch({ type: TYPES.UPDATE_PLUGIN_DIALOG_CREATE_MENU_FORM_DEFAULT_VALUE, value: { parentId, type, title } });
    dispatch({ type: TYPES.UPDATE_PLUGIN_DIALOG_CREATE_MENU_VISIBLE_STATUS, value: true });
  };

  const handleOnSelect= (node:any)=>{
    const {key,type} = node
    const pluginPageDefaultData = state.plugin.pluginPageDefaultData

    if (Number(type) === 1||pluginPageDefaultData.key===key) {
      return
    }
    dispatch({type:TYPES.SETTING_PLUGIN_PAGE_DEFAULT_DATA,value:{id:key,...node}})
    dispatch({type:TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY,value:'0'})
    getPageSchema({menuId:key}).then(res=>{
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
  }
  const titleRender = (item: TitleRenderType) => {
    return <div className='tree-item' onClick={handleOnSelect.bind(this,item)}>
      <div className='title'>
        <TitleEdit id={item.key} label={item.title} type={item.type}/>
      </div>
      <div className='handle-group'>
        {
          Number(item.type) === 1 && (
            <Button
              type='link'
              size='small'
              onClick={
                (e)=>{
                  e.stopPropagation()
                  handleOpenCreateMenuDialog({parentId:item.key, parentType:2,})
                }
              }
              className='handle-btn'>
              新增
            </Button>)
        }
        <Button type='link' danger size='small' className='handle-btn' onClick={(e)=>{
          e.stopPropagation()
          handleDelete(item.key)
        }}>
          删除
        </Button>
      </div>
    </div>;
  };
  return <div className='drawer-container-box'>
    <CreateMenuDialog onFresh={getMenuSource}/>
    <div className='search-handle'>
      <Search onSearch={handleOnSearch} allowClear />
    </div>
    <div className='plugin-scroll-container tree'>
      <div className='bg-fill'>
        {
          renderTree.length > 0 && <Tree
            autoExpandParent
            defaultExpandAll
            defaultExpandParent
            selectedKeys={[state.plugin.pluginPageDefaultData.id]}
            treeData={renderTree}
            titleRender={titleRender}
            showIcon />
        }
        <span className='add-item' onClick={handleOpenCreateMenuDialog.bind(this, { parentId: 0, parentType: null })}>
            <i className='iconfont icon-add' />新增
        </span>
      </div>
    </div>
  </div>;
};
export default MenuManagement;
