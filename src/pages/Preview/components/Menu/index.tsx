import React, { useContext, useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { getPageSchema, menuListGetting } from '@/http/api/editor';
import {useHistory,useParams} from 'react-router-dom'
import { StoreContext, TYPES } from '@/pages/Editor/store';

const MenuList: React.FC = () => {
  const [items,setItems] = useState<MenuProps['items']>([])
  const history = useHistory()
  const {dispatch} = useContext(StoreContext)
  const [selectKey,setSelectKey] = useState([])
  const params = useParams()
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
  const getSchemaSource = (menuId:string)=>{
    getPageSchema({menuId}).then(res=>{
      const {schema} = res.data
      dispatch({type:TYPES.RENDER_TREE_SCHEMA_REPLACE,value:JSON.parse(schema)})
    })
  }
  useEffect(()=>{
    getMenuListSource()
  },[])
  useEffect(()=>{
    if (params) {
      //@ts-ignore
      const {id} = params
      getSchemaSource(id)
      //@ts-ignore
      setSelectKey([id])
    }
  },[params])
  const onClick: MenuProps['onClick'] = (e) => {
    history.replace(`/preview/${e.key}`)
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      selectedKeys={selectKey}
      mode="inline"
      items={items}
    />
  );
};

export default MenuList
