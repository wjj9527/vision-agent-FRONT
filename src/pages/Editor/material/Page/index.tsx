import React, { useContext } from 'react';
import './style.less';
import { StoreContext,} from '@/pages/Editor/store';
import { component } from '../index';
import ElementBody from '@/pages/Editor/material/components/ElementBody';

interface TreeProps {
  label: string,
  type: string,
  value: string,
  id: string | number | symbol | null | undefined,
  data?: any,
  children: TreeProps[]
}

const renderTreeAction: React.FC<TreeProps> = (tree) => {
  let context = null;
  if (tree?.children) {
    context = tree?.children?.map(item=>{
      // @ts-ignore
      const Wrapper = component[item.value]||(()=><>111</>)
      return <Wrapper key={item.id} {...item}>{tree.children?renderTreeAction(item):null}</Wrapper>
    })
  }
  return <>
    {context}
  </>
};
const Page: React.FC = () => {
  const { state} = useContext(StoreContext);
  const style = state.renderTree.schema.data.style

  const classNames = {
    'preview-body':true,
    'dnd-container':true
  };
  return (
    <ElementBody style={style} id={'0'} className={classNames} label={'页面'} handleActions={['update','insert']}>
      {renderTreeAction(state.renderTree.schema)}
    </ElementBody>
  );
};

export default Page;
