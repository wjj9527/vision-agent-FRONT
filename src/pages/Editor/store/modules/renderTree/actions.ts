import TYPES from './types';

export default {
  [TYPES.RENDER_TREE_SET_TARGET_ELEMENT_CHECKED_KEY]:(state:any,action:any)=>{
    state.renderTree.targetElementCheckedKey = action.value
  },
  [TYPES.RENDER_TREE_CREATE_PAGE_ROOT_ELEMENT]:(state:any,action:any)=>{
    state.renderTree.schema.children.push(action.value)
    state.renderTree.targetElementCheckedKey = action.value.id
  }
}
