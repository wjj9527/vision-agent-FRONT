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

// @ts-ignore
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

  if (Wrapper) {
    return <Wrapper {...tree}>
      {/*{tree.label}*/}
      {context}
    </Wrapper>;
  }
};
const Page: React.FC= () => {
  const { state, dispatch } = useContext(StoreContext);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item:any, monitor) => {
      const {title,type,value} = item
      if (type === 'container') {
        const id = createUUID()
        dispatch({
          type: TYPES.RENDER_TREE_CREATE_PAGE_ROOT_ELEMENT,
          value: {
            label:title,type,value,id,
            data:{
              style:{
                display:'block',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'flex-start',
                flexWrap:'nowrap',
                marginTop:'10',
                marginBottom:'10',
                marginLeft:'10',
                marginRight:'10',
                paddingTop:'10',
                paddingBottom:'10',
                paddingLeft:'10',
                paddingRight:'10',
                width:null,
                height:null,
                widthPrefix:'px',
                heightPrefix:'px'
              }
            }
          },
        });
        // dispatch({type:TYPES.RENDER_TREE_INSERT_TO_ELEMENT,value:{targetId:'6',insertValue:{label:'容器2.5',id:'89'}}})
      }
    },
    // hover: (item, monitor) => {
    //   const isOverCurrent = monitor.isOver({ shallow: true });
    //   if (isOverCurrent) {
    //     return;
    //   }
    //   // 判断是否在最内层容器内
    //   const canDrop = monitor.isOver({ shallow: false });
    //   if (canDrop) {
    //     monitor.canDrop(true);
    //   }
    // },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onTargetChecked = (event: any) => {
    event.stopPropagation();
  };
  const handleOnMove = (event:any)=>{
    // event.preventDefault()
    // console.log('page')
  }
  const classNames = `preview-body dnd-container ${isOver ? 'is-over' : ''}`;

  return (
    <div ref={(node) => drop(node)} onClick={onTargetChecked} className={classNames}>
      {renderTreeAction(state.renderTree.schema)}
    </div>
  );
};

export default Page;
