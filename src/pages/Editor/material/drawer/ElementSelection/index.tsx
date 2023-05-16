import React, { useContext,useState } from 'react';
import { Drawer, Button, Input } from 'antd';
import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { plugin, getDefaultElementData, pluginType, pluginItemType } from '@/pages/Editor/material';
import type { ElementType } from '@/pages/Editor/Types';

const { Search } = Input;
const ElementSelection: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { pluginDrawerElementSelectionVisible } = state.plugin;
  const { targetElementCheckedKey } = state.renderTree;
  const [pluginList,setPluginList] = useState(plugin)
  const handleClose = () => {
    dispatch({ type: TYPES.UPDATE_PLUGIN_DRAWER_ELEMENT_SELECTION_VISIBLE_STATUS, value: false });
  };
  const handleCreateElement = (item: ElementType) => {
    //@ts-ignore
    const pushValue = getDefaultElementData(item.value);
    dispatch({
      type: TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT,
      value: { pushValue, targetId: targetElementCheckedKey },
    });
  };

  const handleSearch = (text:string)=>{
    let configList =  JSON.parse(JSON.stringify(plugin));
    let stateList:pluginType[] = [];
    configList.forEach((item:pluginType)=>{
      const blockItems = item.items.filter((i: pluginItemType)=>{
        return i.label.includes(text)||i.searchEKEY.toUpperCase().includes(text.toUpperCase())
      })
      item.items = blockItems
      // @ts-ignore
      !!blockItems.length&&stateList.push(item)
    })
    // @ts-ignore
    setPluginList(stateList)
  }
  const handleClear = (text:string)=>{
    if (!!text) {
      handleSearch('')
    }
  }

  return <Drawer
    title='选择组件'
    placement='left'
    width={500}
    onClose={handleClose}
    mask={false}
    open={pluginDrawerElementSelectionVisible}
  >
    <div className='drawer-inner-container'>
      <div className='drawer-inner-header'>
        {/*@ts-ignore*/}
        <Search placeholder='请输入要搜索的组件名' allowClear onSearch={handleSearch} onInput={handleClear} />
      </div>
      <div className='drawer-inner-content'>
        {
          pluginList.map(i => {
            return <div className='items-content' key={i.value}>
              <div className='label'>{i.label}</div>
              <div className='items-block'>
                {
                  // @ts-ignore
                  i.items.map(b => (<div className='item' key={b.value} onClick={handleCreateElement.bind(this, b)}>
                    <div className='icon-block'>
                      <i className={`iconfont ${b.icon}`} />
                    </div>
                    <div className='title'>{b.label}</div>
                  </div>))
                }
              </div>
            </div>;
          })
        }
      </div>
      <div className='drawer-inner-footer'>
        <Button>
          <div className='btn-text' onClick={handleClose}>取消</div>
        </Button>
      </div>
    </div>
  </Drawer>;
};

export default ElementSelection;
