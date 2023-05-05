import { useDrop } from 'react-dnd';
import React, { useContext } from 'react';
import ItemTypes from '@/pages/Editor/container/ItemTypes';
import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import {createUUID} from '@/pages/utils';
import {component} from '../index'
// interface DraggableAndDroppableProps {
//   id: number | string,
//   type: string,
//   className?: string,
// }

interface TreeProps {
  label: string,
  type: 'page' | 'container' | 'component',
  id: string | number | symbol | null | undefined,
  data?: any,
  children: TreeProps[]
}

const renderTreeAction: React.FC<TreeProps> = (tree) => {
  let context = null;
  if (tree?.children) {
    context = tree?.children?.map((item): React.ReactElement<any, any> | null => renderTreeAction(item));
  }
  if (tree.type === 'page') {
    return <>
      {context}
    </>
  }
  // @ts-ignore
  const Wrapper = component[tree.value]
  return <Wrapper id={tree.id}>
    {tree.label}
    {context}
  </Wrapper>;
};
const Page: React.FC= () => {
  const { state, dispatch } = useContext(StoreContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item:any, monitor) => {
      // console.log(111111111111111111111111111111111111111111111)
      const {title,type,value} = item
      if (type === 'container') {
        const id = createUUID()
        dispatch({
          type: TYPES.RENDER_TREE_CREATE_PAGE_ROOT_ELEMENT,
          value: {
            label:title,type,value,id
          },
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onTargetChecked = (event: any) => {
    event.stopPropagation();
  };
  const classNames = `preview-body dnd-container ${isOver ? 'is-over' : ''}`;

  return (
    <div ref={(node) => drop(node)} onClick={onTargetChecked} className={classNames}>
      {renderTreeAction(state.renderTree.schema)}
    </div>
  );
};

export default Page;
