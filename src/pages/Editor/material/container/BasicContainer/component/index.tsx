// import { useDrag, useDrop } from 'react-dnd';
import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import './style.less'

import './style.less'
import { StoreContext,TYPES } from '@/pages/Editor/store';
// import { createUUID } from '@/pages/utils';
interface DraggableAndDroppableProps {
  id: number | string ,
  children?: ReactNode[],
  type: string,
  onMove?: Function | null | undefined,
  className?: string,
}

const EmptyFill =()=>{
  return <div className='empty-fill'>
    拖拽组件或容器到这里
  </div>
}

const DraggableAndDroppable = ({ id, children, className='' }: DraggableAndDroppableProps) => {
  const {state,dispatch} = useContext(StoreContext)
  // console.log(id)
  // const classNames = `basic-container ${}`
  const classNameList = classNames('basic-container',{
    'active':state.renderTree.targetElementCheckedKey === id,
  })
  // console.log(state.renderTree.targetElementCheckedKey)
  return (
    <div className={classNameList} onClick={dispatch.bind(this,{type:TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY,value:id})}>
      {<EmptyFill/>}
    </div>
  );
};

export default DraggableAndDroppable;
