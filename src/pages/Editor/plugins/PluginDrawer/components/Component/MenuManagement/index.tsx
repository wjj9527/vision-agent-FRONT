import React, { useEffect, useState } from 'react';
import { menuListGetting, createMenuItemAction } from '@/http/api/editor';
import { Tree, Input, Button, Dropdown, MenuProps } from 'antd';
import type { TreeProps, DataNode } from 'antd/es/tree';

const { Search } = Input;

const MenuManagement: React.FC = () => {
  const [renderTree, setRenderTree] = useState([]);
  const getMenuSource = () => {
    menuListGetting().then(res => {
      const { data } = res;
      const renameIdToKey = (obj: any) => {
        if (Array.isArray(obj)) {
          return obj.map((item) => {
            const newItem = { ...item };
            newItem.key = newItem.id;
            delete newItem.id;
            newItem.children = renameIdToKey(newItem.children);
            return newItem;
          });
        }
        const newObj = { ...obj };
        newObj.key = newObj.id;
        delete newObj.id;
        newObj.children = renameIdToKey(newObj.children);
        return newObj;
      };
      const nodes = renameIdToKey(data);
      setRenderTree(nodes);
    });
  };

  const handleOnSearch = () => {

  };

  const handleCreateItem = (data: any) => {
    createMenuItemAction(data).then(res => {
    });
  };
  const dropDownItems: MenuProps['items'] = [
    {
      label: <div className="dropdown-item" onClick={(e)=>{
        e.stopPropagation()
        handleCreateItem({parentId:0,type:2,title:'测试页面'})
      }}>页面</div>,
      key: '0',
    },
    {
      label: <div className="dropdown-item" onClick={(e)=>{
        e.stopPropagation()
        handleCreateItem({parentId:0,type:2,title:'测试菜单'})
      }}>菜单</div>,
      key: '1',
    },
  ];
  const titleRender = (item: DataNode) => {
    return <div className='tree-item'>
      <div className='title'>
        {item.title}
      </div>
      <div className='handle-group'>
        <Button type='link' size='small' className='handle-btn'>
          新增
        </Button>
        <Button type='link' danger size='small' className='handle-btn'>
          删除
        </Button>
      </div>
    </div>;
  };
  useEffect(() => {
    getMenuSource();
  }, []);
  return <div className='drawer-container-box'>
    <div className='search-handle'>
      <Search onSearch={handleOnSearch} allowClear />
    </div>
    <div className='plugin-scroll-container tree'>
      <div className='bg-fill'>
        {
          renderTree.length > 0 && <Tree
            // onSelect={handleOnSelect}
            autoExpandParent
            defaultExpandAll
            defaultExpandParent
            // selectedKeys={[state.renderTree.targetElementCheckedKey]}
            treeData={renderTree}
            titleRender={titleRender}
            showIcon />
        }
        <Dropdown menu={{ items: dropDownItems }} placement='bottom' arrow>
          {/*<Button>新增</Button>*/}
          <span className='add-item'>
            <i className='iconfont icon-add' />新增
          </span>
        </Dropdown>
      </div>
    </div>
  </div>;
};
export default MenuManagement;
