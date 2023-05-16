import React, { useContext, useEffect } from 'react';
import { StyleType } from '@/pages/Editor/Types';
import classNames from 'classnames';
import { CSSFormat } from '@/pages/utils/CSSFormat';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { message, Tooltip } from 'antd';
import './style.less';

interface ClassNameType {
  [key: string]: boolean
}

type HandleType = 'copy'|'delete'|'insert'

interface ElementBodyProps {
  style?: StyleType | {},
  className?: ClassNameType,
  label: string,
  children: React.ReactChildren | React.ReactNode | JSX.Element | null,
  id: string | number,
  handleActions?: HandleType[],
  type?:string
}

const ElementBody: React.FC<ElementBodyProps> = ({ style, className, label, children, id, handleActions=['copy','delete'],type }) => {
  const { state, dispatch } = useContext(StoreContext);
  let classNamesList = classNames('badge-body', className, {
    'active': state.renderTree.targetElementCheckedKey === id,
  });
  const handleTargetElementSetting = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log(id);
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
    insert:insertElementJSX,
    copy:copyElementJSX,
    delete:deleteElementJSX
  }

  const handleGroupList:JSX.Element[] = handleActions.map(key=>{
    return handleActionsElements[key]
  })
  return <div style={CSSFormat(style)} className={classNamesList} onClick={handleTargetElementSetting}>
    <div className='badge-content'>
      <div className='label'>{label}</div>
      <div className='handle-group'>
        {handleGroupList}
      </div>
    </div>
    {children}
  </div>;
};

export default ElementBody;
