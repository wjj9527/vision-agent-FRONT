import { useDrag, useDrop } from 'react-dnd';
import React,{ReactNode} from 'react';
import ItemTypes from '@/pages/Editor/container/ItemTypes';
import './style.less'
interface DraggableAndDroppableProps {
  id: number | string ,
  children?: ReactNode[],
  type?: string,
  onMove?: Function | null | undefined,
  className?: string,
}

const DraggableAndDroppable = ({ id, type='element',children, className }: DraggableAndDroppableProps) => {
  //可拖动
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id, },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  //可包裹
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    // @ts-ignore
    drop: (item) => {
      // console.log(id,'自身id')
      // console.log(item,'拖入')
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    hover: (item, monitor) => {
      const isOverCurrent = monitor.isOver({ shallow: true });
      const canDrop = !isOverCurrent;
      // 如果拖拽元素在上层容器内，阻止放置操作
      if (!canDrop) {
        // @ts-ignore
        monitor.canDrop(false);
      }
    },
  });

  const onTargetChecked = (event: any) => {
    event.stopPropagation();
  };
  const classNames = `${className} dnd-container ${isDragging?'is-dragging':''} ${isOver?'is-over':''}`

  return (
    <div ref={(node) => drag(drop(node))}  onClick={onTargetChecked} className={classNames}>
      {id}
      {children}
    </div>
  );
};

export default DraggableAndDroppable;
