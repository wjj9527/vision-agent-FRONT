import React, { useContext } from 'react';
import './style.less'
import * as _ from './datasource'
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { Container } from '@/pages/utils/findContainerById';
import createUUID from '@/pages/utils/UUID';
const moduleList = Object.values(_)
const Group:React.FC = ()=>{
  const {state,dispatch} = useContext(StoreContext)
  const {targetElementCheckedKey} = state.renderTree
  const handleClick = (schema:any)=>{
    const replaceObjectIds =(obj:any)=> {
      const newObj: Container = { ...obj };
      newObj.id = createUUID();
      if (newObj.children) {
        newObj.children = newObj.children.map(child => replaceObjectIds(child,));
      }
      return newObj;
    }
    const pushValue = replaceObjectIds(schema)
    dispatch({
      type: TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT,
      value: { pushValue, targetId: targetElementCheckedKey },
    });
  }
  return <div className="group-template-plugin">
    <div className='group-content'>
      {
        moduleList.map(item=>{
          return <div className='group-item' onClick={handleClick.bind(this,item.schema)}>
            <div className='icon-content'>
              <i className={`iconfont ${item.icon}`}/>
            </div>
            <div className='text'>
              {item.label}
            </div>
          </div>
        })
      }
    </div>
  </div>
}
export default Group
