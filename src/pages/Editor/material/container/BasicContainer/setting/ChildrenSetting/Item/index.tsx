import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Popconfirm, message, Tooltip } from 'antd';
import LayoutSettingBlock from '@/pages/Editor/material/components/LayoutSettingBlock';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import classNames from 'classnames';
import Dnd from '../Dnd'

interface ItemType {
  id: string,
  label: string,
  type: string
}

interface IProps {
  item: ItemType,
  collapse:boolean
}



const Item: React.FC<IProps> = ({ item ,}) => {
  const { id, label } = item;
  const [labelText, setLabelText] = useState<string>('');
  const inputRef = useRef(null);
  const { state,dispatch } = useContext(StoreContext);
  const pluginSettingChildItemCollapse = state.plugin.pluginSettingChildItemCollapse
  const pluginSettingChildItemIsCanMoveStatus = state.plugin.pluginSettingChildItemIsCanMoveStatus
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [collapseStatus,setCollapseStatus] = useState<boolean>(pluginSettingChildItemCollapse)
  useEffect(() => {
    if (editStatus) {
      setLabelText(label);
      setTimeout(() => {
        //@ts-ignore
        inputRef?.current?.focus();
      });
    }
  }, [editStatus]);
  useEffect(()=>{
    setCollapseStatus(pluginSettingChildItemCollapse)
    console.log(collapseStatus)
  },[pluginSettingChildItemCollapse])
  const handleDelete = () => {
    const { id } = item;
    const callback = (b: boolean) => {
      if (b) {
        message.success('删除成功');
      }
    };
    dispatch({ type: TYPES.RENDER_TREE_DELETE_ELEMENT_BY_ID, id, callback });
  };
  const handleTargetElementSetting = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch({ type: TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY, value: id });
  };

  const handleUpdateElementLabel = () => {
    if (!labelText) {
      message.error('组件名称不能为空');
      return;
    }
    const callback = () => {
      setEditStatus(false);
    };
    dispatch({ type: TYPES.RENDER_TREE_UPDATE_ELEMENT_LABEL_BY_ID, id, label: labelText, callback });
  };
  const handleUpdateLabelCache = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };
  const collapseIconClassNames = classNames('iconfont',{
    'icon-arrowdown':collapseStatus,
    'icon-arrowup':!collapseStatus
  })
  const contentClassNames = classNames('item-content',{
    'is-collapse':collapseStatus
  })
  const itemElement = (<div className='children-setting-item'>
    <div className='item-title'>
      <div className='title-text'>
        {
          editStatus ? <input type='text' className='title-input' maxLength={10} value={labelText}
                              onInput={handleUpdateLabelCache} /> : <div className='text'>{label}</div>
        }
        {
          !editStatus ? (<div className='edit-btn' onClick={setEditStatus.bind(this, true)}>
            <Tooltip title='编辑'>
              <i className='iconfont icon-editor' />
            </Tooltip>
          </div>) : (<div className='edit-btn' onClick={handleUpdateElementLabel}>
            <Tooltip title='保存'>
              <i className='iconfont icon-baocun' />
            </Tooltip>
          </div>)
        }
      </div>
      <div className='handle'>
        <Button type='link' className='btn' onClick={handleTargetElementSetting}>
          选中
        </Button>
        <Popconfirm
          title='是否删除？'
          onConfirm={handleDelete}
          okText='是'
          cancelText='否'
        >
          <Button type='link' className='btn' danger>
            删除
          </Button>
        </Popconfirm>
        {
          !pluginSettingChildItemIsCanMoveStatus?(
            <div className='collapse-btn' onClick={setCollapseStatus.bind(this,!collapseStatus)}>
              <i className={collapseIconClassNames} />
            </div>
          ):(
            <div className='collapse-btn' >
              <i className="iconfont icon-arrows-alt" />
            </div>
          )
        }
      </div>
    </div>
    <div className={contentClassNames}>
      <LayoutSettingBlock id={id} />
    </div>
  </div>)
  return pluginSettingChildItemIsCanMoveStatus?<Dnd id={id}>
    {itemElement}
  </Dnd>:itemElement
};
export default Item;
