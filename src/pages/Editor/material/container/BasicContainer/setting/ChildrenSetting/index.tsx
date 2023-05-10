import React, { useContext } from 'react';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Item from './Item';
import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { createUUID } from '@/pages/utils';
import { findContainerById } from '@/pages/utils/findContainerById';

const ChildrenSetting: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);
  const targetId = state.renderTree.targetElementCheckedKey;
  const schema = state.renderTree.schema;
  const { element } = findContainerById(targetId, schema);

  //当前容器新增子集
  const appendChildContainer = () => {
    const uuid = createUUID();
    dispatch(
      {
        type: TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT,
        value: {
          targetId,
          pushValue: {
            label: '子容器',
            type: 'container',
            id: uuid,
            data: {
              style: {
                display: 'block',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                marginTop: '10',
                marginBottom: '10',
                marginLeft: '10',
                marginRight: '10',
                paddingTop: '10',
                paddingBottom: '10',
                paddingLeft: '10',
                paddingRight: '10',
                width: null,
                height: null,
                widthPrefix: 'px',
                heightPrefix: 'px',
              },
            },
          },
        },
      });
  };
  const appendChildElement = ()=>{

  }
  const menuItems: MenuProps['items'] = [{
    key: 'container',
    label: <span onClick={appendChildContainer}>子容器</span>,
  },{
    key: 'element',
    label: <span onClick={appendChildElement}>组件块</span>,
  }];
  return <div className='children-setting'>
    <div className='btn-group'>
      <Dropdown menu={{items:menuItems}}>
        <Button type='primary' className='btn'>新增</Button>
      </Dropdown>
      <Button type='primary' className='btn' ghost>排列</Button>
    </div>
    <div className='children-setting-scroll-content'>
      <div className='children-setting-scroll-inner-view'>
        {/*@ts-ignore*/}
        {element?.children?.map((item: any) => <Item item={item} key={item.key} />)}
      </div>
    </div>
  </div>;
};

export default ChildrenSetting;
