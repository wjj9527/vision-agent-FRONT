import { Input, Tree } from 'antd';
import { useContext, useEffect, useState } from 'react';
import {StoreContext,TYPES} from '@/pages/Editor/store'
import type { TreeProps } from 'antd/es/tree';
import './style.less'
const { Search } = Input;


interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const dataFormat = (tree:any)=>{
  let {label,id,children,icon} = tree
  const title = label
  const key = id
  if (!!children||children?.length) {
    children = children.map((item: any)=>dataFormat(item))
  }
  icon = <i className={`iconfont ${icon} menu-outline-icon`}/>
  return {title,key,children,icon}
}

export default () => {
  const {state,dispatch} = useContext(StoreContext);
  const [renderTree,setRenderTree] = useState([]);

  useEffect(()=>{
    const dataTree:DataNode = dataFormat(state.renderTree.schema)
    // @ts-ignore
    setRenderTree([dataTree])

  },[state])

  const handleOnSearch = () => {
  };

  const handleOnSelect:TreeProps['onSelect'] = (node)=>{
    const [value] = node
    dispatch({type:TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY,value})
    // console.log(state)
  }

  // @ts-ignore
  return <div className='drawer-container-box'>
    <div className='search-handle'>
      <Search onSearch={handleOnSearch} allowClear />
    </div>
    <div className='plugin-scroll-container tree'>
      <div className='bg-fill'>
        {
          renderTree.length>0&&<Tree
            onSelect={handleOnSelect}
            autoExpandParent
            defaultExpandAll
            defaultExpandParent
            selectedKeys={[state.renderTree.targetElementCheckedKey]}
            treeData={renderTree}
            showIcon />
        }
      </div>
    </div>
  </div>;
}
