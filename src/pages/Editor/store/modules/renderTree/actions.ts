import TYPES from './types';

import { findContainerById,Container } from '@/pages/utils/findContainerById';

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
    //页面容器没有parent直接在页面下添加
    if (!parent&&targetId==='0') {
      schema.children.push(pushValue)
      return
    }
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
      const data = JSON.parse(JSON.stringify(element?.data||{}))
      Object.assign(data,action.data)
      element.data = data
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
      callback(targetIndex!==-1)
    }
  },
  [TYPES.RENDER_TREE_COPY_ELEMENT_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {id,callback} = action
    const {parent,element} = findContainerById(id,schema)
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
  },
  [TYPES.RENDER_TREE_UPDATE_ELEMENT_LABEL_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {id,callback,label} = action
    const {element} = findContainerById(id,schema)
    if (element) {
      element.label = label
      callback&&callback()
    }
  },
  [TYPES.RENDER_TREE_INSERT_TO_ELEMENT_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {insertId,containerId,} = action
    const {element,parent} = findContainerById(insertId,schema)
    if (element) {
      const list = parent?.children
      const insetIndex = list?.findIndex(item=>item.id===insertId)
      // @ts-ignore
      const [insertData] = (insetIndex!==-1)?list?.splice(insetIndex,1):{}
      const containerIndex = list?.findIndex(item=>item.id===containerId)
      // @ts-ignore
      list?.splice(containerIndex+1,0,insertData)
      console.log(parent)
    }
  }
}
