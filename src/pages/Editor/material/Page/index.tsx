import { useDrop } from 'react-dnd';
import React, { ReactNode, useContext } from 'react';
import ItemTypes from '@/pages/Editor/container/ItemTypes';
import './style.less'
import { StoreContext } from '@/pages/Editor/store';
interface DraggableAndDroppableProps {
  id: number | string ,
  type: string,
  className?: string,
}
interface TreeProps {
  label:string,
  type:'page'|'container'|'component',
  id:string|number|symbol|null|undefined,
  data?:any,
  children:TreeProps[]
}
const renderTreeAction:React.FC<TreeProps> = (tree)=>{
  let context = null
  if (tree?.children) {
    context = tree?.children?.map((item): React.ReactElement<any, any> | null =>renderTreeAction(item))
  }
  return <div>
    {tree.label}
    {context}
  </div>
}
const Page:React.FC<DraggableAndDroppableProps> = ({ id, children,}) => {
  const {state,dispatch} = useContext(StoreContext)

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item,monitor) =>{
      console.log(item)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onTargetChecked = (event: any) => {
    event.stopPropagation();
  };
  const classNames = `preview-body dnd-container ${isOver?'is-over':''}`

  return (
    <div ref={(node) => drop(node)}  onClick={onTargetChecked} className={classNames}>
      {renderTreeAction(state.renderTree.schema)}
    </div>
  );
};

export default Page;
