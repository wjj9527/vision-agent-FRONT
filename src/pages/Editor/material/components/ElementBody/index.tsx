import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleType } from '@/pages/Editor/Types';
import classNames from 'classnames';
import { CSSFormat } from '@/pages/utils/CSSFormat';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { message, Tooltip } from 'antd';
import './style.less';

interface ClassNameType {
  [key: string]: boolean
}

type HandleType = 'copy'|'delete'|'insert'|'update'

interface ElementBodyProps {
  style?: StyleType | {},
  className?: ClassNameType,
  label: string,
  children: React.ReactChildren | React.ReactNode | JSX.Element | null,
  id: string | number,
  handleActions?: HandleType[],
  type?:string
}

const ElementBody: React.FC<ElementBodyProps> = ({ style, className, label, children, id, handleActions=['update','copy','delete'],type }) => {
  const { state, dispatch } = useContext(StoreContext);
  const [editStatus,setEditStatus] = useState(false)
  const [labelText,setLabelText] = useState(label)
  const inputRef = useRef(null)
  let classNamesList = classNames('badge-body', className, {
    'active': state.renderTree.targetElementCheckedKey === id,
  });
  const handleTargetElementSetting = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch({ type: TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY, value: id });
  };
  const handleDeleteElement = () => {
    const callback = (b: boolean) => {
      if (b) {
        message.success('删除成功');
      }
    };
    dispatch({ type: TYPES.RENDER_TREE_DELETE_ELEMENT_BY_ID, id, callback });
  };
  const handleCopyElement = () => {
    const callback = () => {
      message.success('复制成功');
    };
    dispatch({ type: TYPES.RENDER_TREE_COPY_ELEMENT_BY_ID, id, callback });
  };
  const handleInsertElement =()=>{
    dispatch({ type: TYPES.UPDATE_PLUGIN_DRAWER_ELEMENT_SELECTION_VISIBLE_STATUS, value:true });
  }
  const handleUpdateElement =()=>{
    setEditStatus(true)
  }
  const handleUpdateElementSave =()=>{
    if (!labelText) {
      setEditStatus(false)
      setLabelText(label)
      message.error('组件名称不能为空');
      return;
    }
    dispatch({ type: TYPES.RENDER_TREE_UPDATE_ELEMENT_LABEL_BY_ID, id, label: labelText, callback:setEditStatus.bind(this,false) });
  }
  const handleEditInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLabelText(e.target.value)
  }
  const updateElementJSX = (<div className='handle-item' key="update">
    <Tooltip placement='top' title={editStatus?'保存':'编辑'}>
      {!editStatus?<i className='iconfont icon-editor' onClick={handleUpdateElement} />:<i className='iconfont icon-baocun' onClick={handleUpdateElementSave} />}
    </Tooltip>
  </div>)
  const insertElementJSX = (<div className='handle-item' key="insert">
    <Tooltip placement='top' title='创建子元素'>
      <i className='iconfont icon-xinzeng' onClick={handleInsertElement} />
    </Tooltip>
  </div>)
  const copyElementJSX = (<div className='handle-item' key="copy">
    <Tooltip placement='top' title='复制'>
      <i className='iconfont icon-fuzhi' onClick={handleCopyElement} />
    </Tooltip>
  </div>)
  const deleteElementJSX = (<div className='handle-item' key="delete">
    <Tooltip placement='top' title='删除'>
      <i className='iconfont icon-shanchu' onClick={handleDeleteElement} />
    </Tooltip>
  </div>)
  const handleActionsElements = {
    update:updateElementJSX,
    insert:insertElementJSX,
    copy:copyElementJSX,
    delete:deleteElementJSX
  }

  const handleGroupList:JSX.Element[] = handleActions.map(key=>{
    return handleActionsElements[key]
  })
  useEffect(()=>{
    setLabelText(label)
  },[label])
  useEffect(()=>{
    if (editStatus) {
      setTimeout(()=>{
        if (inputRef.current) {
          //@ts-ignore
          inputRef.current?.focus()
        }
      })
    }
  },[editStatus])
  return <div style={CSSFormat(style||{})} className={classNamesList} onClick={handleTargetElementSetting}>
    <div className='badge-content'>
      {
        editStatus?(<div className='label'><input type='text' ref={inputRef} className="label-input" value={labelText} onInput={handleEditInput} /></div>):(<div className='label'>{label}</div>)
      }
      <div className='handle-group'>
        {handleGroupList}
      </div>
    </div>
    {children}
  </div>;
};

export default ElementBody;
