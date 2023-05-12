import TYPES from './types'

export default {
  [TYPES.UPDATE_PLUGIN_DRAWER_TARGET]:(state:any,action:any)=>{
    state.plugin.pluginCurrentTarget = action.value
  },
  [TYPES.UPDATE_PLUGIN_DRAWER_VISIBLE]:(state:any,action:any)=>{
    state.plugin.pluginDrawerVisible = action.value
  },
  [TYPES.UPDATE_PLUGIN_DRAWER_FIXED]:(state:any,action:any)=>{
    state.plugin.pluginDrawerFixed = action.value
  },
  [TYPES.UPDATE_PLUGIN_SETTING_FOLD]:(state:any,action:any)=>{
    state.plugin.pluginSettingFold = action.value
  },
  [TYPES.UPDATE_PLUGIN_SETTING_CHILD_ITEM_COLLAPSE]:(state:any,action:any)=>{
    state.plugin.pluginSettingChildItemCollapse = action.value
  },
  [TYPES.UPDATE_PLUGIN_SETTING_CHILD_ITEM_IS_CAN_MOVE_STATUS]:(state:any,action:any)=>{
    state.plugin.pluginSettingChildItemIsCanMoveStatus = action.value
  },
  [TYPES.UPDATE_PLUGIN_DRAWER_ELEMENT_SELECTION_VISIBLE_STATUS]:(state:any,action:any)=>{
    state.pluginDrawerElementSelectionVisible = action.value
  }
}
