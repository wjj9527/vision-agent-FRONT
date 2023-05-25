import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { menuListGetting } from '@/http/api/editor';

const MenuList: React.FC = () => {
  const [items,setItems] = useState<MenuProps['items']>([])
  const getMenuListSource =()=>{
    menuListGetting().then(res=>{
      const {data} = res
      const items = data.map((item:any)=>{
        let {id,title,children,icon,type} = item
        if (children) {
          children = children.map((i:any)=>{
            let {id,title,icon} = i
            return {
              key:id,
              label:title,
              icon
            }
          })
        }
        return {
          key:id.toString(),
          label:title,
          icon,
          children:(children&&children.length)?children:null,
          type:Number(type)===1?'sub':null
        }
      })
      setItems(items)
    })
  }
  useEffect(()=>{
    getMenuListSource()
  },[])
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default MenuList;
