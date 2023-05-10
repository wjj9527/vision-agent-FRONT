import React, { useContext } from 'react';
import {Button,Popconfirm,message} from 'antd'
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
import { StoreContext,TYPES } from '@/pages/Editor/store';
interface ItemType {
  id:string,
  label:string,
  type:string
}
interface IProps {
  item:ItemType
}
const Item:React.FC<IProps> = ({item})=>{
  const {id,label} = item
  const {dispatch} = useContext(StoreContext)
  const handleDelete = ()=>{
    const {id} = item
    const callback = (b:boolean)=>{
      if (b) {
        message.success('删除成功')
      }
    }
    dispatch({type:TYPES.RENDER_TREE_DELETE_ELEMENT_BY_ID,id,callback})
  }
  const handleTargetElementSetting = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch({ type: TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY, value: id });
  };
  return <div className="children-setting-item">
    <div className='item-title'>
      <div className='title-text'>{label}</div>
      <div className='handle'>
        <Button type="link" className="btn" onClick={handleTargetElementSetting}>
          选中
        </Button>
        <Popconfirm
          title="是否删除？"
          onConfirm={handleDelete}
          okText="是"
          cancelText="否"
        >
          <Button type="link" className="btn" danger>
            删除
          </Button>
        </Popconfirm>
      </div>
    </div>
    <div className='item-content'>
      <LayoutSettingBlock id={id}/>
    </div>
  </div>
}
export default Item
