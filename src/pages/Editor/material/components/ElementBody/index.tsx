import React, { useContext } from 'react';
import { StyleType } from '@/pages/Editor/Types';
import classNames from 'classnames';
import { CSSFormat } from '@/pages/utils/CSSFormat';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { message, Tooltip } from 'antd';
import './style.less';

interface ClassNameType {
  [key: string]: boolean
}

interface ElementBodyProps {
  style?: StyleType | {},
  className?: ClassNameType,
  label:string,
  children: React.ReactChildren | React.ReactNode | JSX.Element | null,
  id: string | number
}

const ElementBody: React.FC<ElementBodyProps> = ({ style, className,label, children, id }) => {
  let classNamesList = classNames('badge-body', className);
  const { dispatch } = useContext(StoreContext);
  const handleTargetElementSetting = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch({ type: TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY, value: id });
  };
  const handleDeleteElement = ()=>{
    const callback = (b:boolean)=>{
      if (b) {
        message.success('删除成功')
      }
    }
    dispatch({type:TYPES.RENDER_TREE_DELETE_ELEMENT_BY_ID,id,callback})
  }
  const handleCopyElement = ()=>{
    const callback = ()=>{
      message.success('复制成功')
    }
    dispatch({type:TYPES.RENDER_TREE_COPY_ELEMENT_BY_ID,id,callback})
  }
  return <div style={CSSFormat(style)} className={classNamesList} onClick={handleTargetElementSetting}>
    <div className='badge-content'>
      <div className='label'>{label}</div>
      <div className='handle-group'>
        <div className='handle-item'>
          <Tooltip placement='top' title='复制'>
            <i className='iconfont icon-fuzhi'onClick={handleCopyElement} />
          </Tooltip>
        </div>
        <div className='handle-item'>
          <Tooltip placement='top' title='删除'>
            <i className='iconfont icon-shanchu' onClick={handleDeleteElement}/>
          </Tooltip>
        </div>
      </div>
    </div>
    {children}
  </div>;
};

export default ElementBody;
