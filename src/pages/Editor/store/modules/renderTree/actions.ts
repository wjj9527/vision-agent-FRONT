import TYPES from './types';

import { findContainerById } from '@/pages/utils/findContainerById';


export default {
  [TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY]:(state:any,action:any)=>{
    state.renderTree.targetElementCheckedKey = action.value
  },
  [TYPES.RENDER_TREE_CREATE_PAGE_ROOT_ELEMENT]:(state:any,action:any)=>{
    state.renderTree.schema.children.push(action.value)
    state.renderTree.targetElementCheckedKey = action.value.id
  },
  [TYPES.RENDER_TREE_INSERT_TO_ELEMENT]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {targetId,insertValue} = action.value
    const {parent} = findContainerById(targetId,schema.children)
    // @ts-ignore
    let actionList = parent.children
    // @ts-ignore
    const targetIndex = actionList.findIndex(item=>item.id===targetId)
    actionList.splice(targetIndex,0,insertValue)

  },
  [TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {targetId,pushValue} = action.value
    // console.log(targetId)
    const {parent} = findContainerById(targetId,schema.children,schema)

    // @ts-ignore
    const actionList = parent?.children
    if (actionList) {
      let actionItem = actionList.find((item: { id: any; })=>item.id === targetId)
      if (actionItem.children) {
        actionItem.children.push(pushValue)
      }else{
        actionItem.children = [pushValue]
      }
    }
  },
  [TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    let {container} = findContainerById(action.id,schema.children,schema)
  }
}
