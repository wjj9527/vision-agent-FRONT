import TYPES from './types';

import { findContainerById,Container,BasicContainer } from '@/pages/utils/findContainerById';

import createUUID from '@/pages/utils/UUID';


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
    const {parent} = findContainerById(targetId,schema)
    // @ts-ignore
    let actionList = parent.children
    // @ts-ignore
    const targetIndex = actionList.findIndex(item=>item.id===targetId)
    // @ts-ignore
    actionList.splice(targetIndex,0,insertValue)

  },
  [TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {targetId,pushValue} = action.value
    const {parent} = findContainerById(targetId,schema,)
    // @ts-ignore
    const actionList = parent?.children
    if (actionList) {
      let actionItem = actionList.find((item: { id: any; })=>item.id === targetId)
      // @ts-ignore
      if (actionItem.children) {
        // @ts-ignore
        actionItem.children.push(pushValue)
      }else{
        // @ts-ignore
        actionItem.children = [pushValue]
      }
    }
  },
  [TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {element} = findContainerById(action.id,schema,)
    if (element) {
      Object.assign(element?.data,action.data)
    }
  },
  [TYPES.RENDER_TREE_DELETE_ELEMENT_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {id,callback} = action
    const {parent} = findContainerById(id,schema,)
    let targetIndex = null
    if (parent) {
      targetIndex = parent?.children?.findIndex((item:Container)=>item.id===id)
      if (targetIndex!==-1) {
        // @ts-ignore
        parent?.children?.splice(targetIndex,1)
      }
    }
    if (callback&&targetIndex!==-1) {
      callback(!!(targetIndex!==-1))
    }
  },
  [TYPES.RENDER_TREE_COPY_ELEMENT_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {id,callback} = action
    const {parent,element} = findContainerById(id,schema)
    console.log(JSON.stringify(findContainerById(id,schema).element))
    const replaceObjectIds =(obj:any)=> {
      const newObj: Container = { ...obj };
      newObj.id = createUUID();
      if (newObj.children) {
        newObj.children = newObj.children.map(child => replaceObjectIds(child,));
      }
      return newObj;
    }
    const newElement = replaceObjectIds(element)
    if (parent) {
      const insertIndex = parent?.children?.findIndex((item:Container)=>item.id===id)
      if (insertIndex !== -1&&insertIndex!==undefined) {
        parent?.children?.splice(insertIndex,0,newElement)
        callback(true)
      }
    }
  }
}
