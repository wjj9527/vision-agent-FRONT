// import { useDrag, useDrop } from 'react-dnd';
import React, { ReactNode, useContext } from 'react';

import './style.less'
import { StoreContext,TYPES } from '@/pages/Editor/store';

import ElementBody from '@/pages/Editor/material/components/ElementBody';
interface DataType {
  style:object
}
interface DraggableAndDroppableProps {
  id: number | string ,
  children?: ReactNode[],
  type: string,
  label:string,
  onMove?: Function | null | undefined,
  className?: string,
  data:DataType
}

const EmptyFill =()=>{
  return <div className='empty-fill'>
    拖拽组件或容器到这里
  </div>
}



const DraggableAndDroppable:React.FC<DraggableAndDroppableProps> = (props) => {

  const {state,} = useContext(StoreContext)
  const {id,children,data,label} = props
  const {style} = data

  const classNameList = {
    'basic-container':true,
    'active':state.renderTree.targetElementCheckedKey === id,
  }

  return (
    <ElementBody className={classNameList} style={style} id={id} label={label}>
      {/*@ts-ignore*/}
      {children.props.children?.length?children:<EmptyFill/>}
    </ElementBody>

  );
}

export default DraggableAndDroppable;
