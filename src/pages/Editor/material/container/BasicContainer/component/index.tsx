import { useDrag, useDrop } from 'react-dnd';
import React,{ReactNode} from 'react';
import ItemTypes from '@/pages/Editor/container/ItemTypes';
import './style.less'
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

const DraggableAndDroppable = ({ id, children, className }: DraggableAndDroppableProps) => {
  //可拖动
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  //可包裹
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    // @ts-ignore
    drop: (item) => {
      console.log(id)
    },
    hover:(props,monitor)=>{
      const isDragging = monitor.isOver({ shallow: true });

    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onTargetChecked = (event: any) => {
    event.stopPropagation();
  };
  const classNames = `${className} dnd-container ${isDragging?'is-dragging':''} ${isOver?'is-over':''}`

  return (
    <div ref={(node) => drag(drop(node))}  onClick={onTargetChecked} className={classNames}>
      {id}
      {!!children?.length?children:<EmptyFill/>}
    </div>
  );
};

export default DraggableAndDroppable;
