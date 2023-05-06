import TYPES from './types';

interface Container {
  label: string;
  id: string;
  children?: Container[];
}


function findContainerById(id: string, containers: Container[], parent: Container | null = null): { container: {}; parent: null } {
  console.log(containers)
  for (const container of containers) {
    // alert(container.id)
    if (container.id === id) {
      //@ts-ignore
      return { container, parent };
    }
    if (container.children) {
      const result = findContainerById(id, container.children, container);

      if (result) {
        return result;
      }
    }
  }
  return {container:{},parent:null};
}


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
    // setTimeout(()=>{
    //   console.log(state.renderTree)
    // })
  },
  [TYPES.RENDER_TREE_INSERT_TO_PARENT_ELEMENT]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {targetId,pushValue} = action.value
    console.log(targetId)
    const {container,parent} = findContainerById(targetId,schema.children,schema)

    console.log(parent)

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

  }
}
