import React, { useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from '@/pages/Editor/container/ItemTypes';
import classNames from 'classnames';
import { StoreContext, TYPES } from '@/pages/Editor/store';
interface DndProps {
  id:string;
  children:React.ReactNode|JSX.Element;
}
const Dnd:React.FC<DndProps> = ({id,children})=>{
  const {dispatch} = useContext(StoreContext)
  //可拖动
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),

  });
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    // @ts-ignore
    drop: (item) => {
      console.log(item)
      // @ts-ignore
      dispatch({type:TYPES.RENDER_TREE_INSERT_TO_ELEMENT_BY_ID,insertId:item.id,containerId:id})
      // RENDER_TREE_INSERT_TO_ELEMENT_BY_ID
    },
    hover:(props,monitor)=>{
      const isDragging = monitor.isOver({ shallow: true });
      if (isDragging) {
        // console.log(id)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const classNamesList = classNames({
    'is-dragging':isDragging,
    'is-over':isOver
  })
  return <div ref={(node) => drag(drop(node))} className={classNamesList}>
    {children}
  </div>
}
export default Dnd
