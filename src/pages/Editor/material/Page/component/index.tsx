import React, { useContext } from 'react';
import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { createUUID } from '@/pages/utils';
import { component } from '../../index';
import ElementBody from '@/pages/Editor/material/components/ElementBody';

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
    context = tree?.children?.map(item=>{
      // @ts-ignore
      const Wrapper = component[item.value]||(()=><></>)
      return <Wrapper key={item.id} {...item}>{tree.children?renderTreeAction(item):null}</Wrapper>
    })
  }
  return <>
    {context}
  </>
};
const Page: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);

  const classNames = {
    'preview-body':true,
    'dnd-container':true
  };
  return (
    <ElementBody id={'0'} className={classNames} label={'页面'}>
      {renderTreeAction(state.renderTree.schema)}
    </ElementBody>
  );
};

export default Page;
