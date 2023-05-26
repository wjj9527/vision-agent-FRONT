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
    state.plugin.pluginDrawerElementSelectionVisible = action.value
  },
  [TYPES.UPDATE_PLUGIN_DIALOG_CREATE_MENU_VISIBLE_STATUS]:(state:any,action:any)=>{
    state.plugin.pluginDialogCreateMenuVisible = action.value
  },
  [TYPES.UPDATE_PLUGIN_DIALOG_CREATE_MENU_FORM_DEFAULT_VALUE]:(state:any,action:any)=>{
    state.plugin.pluginCreateMenuDefaultValue = action.value
  },
  [TYPES.SETTING_PLUGIN_MENU_LIST]:(state:any,action:any)=>{
    const renameIdToKey = (obj: any) => {
      if (Array.isArray(obj)) {
        return obj.map((item) => {
          const newItem = { ...item };
          newItem.key = newItem.id;
          delete newItem.id;
          newItem.children = renameIdToKey(newItem.children);
          return newItem;
        });
      }
      const newObj = { ...obj };
      newObj.key = newObj.id;
      delete newObj.id;
      newObj.children = renameIdToKey(newObj.children);
      return newObj;
    };
    state.plugin.menuList = renameIdToKey(action.value);
  },
  [TYPES.SETTING_PLUGIN_PAGE_DEFAULT_DATA]:(state:any,action:any)=>{
    state.plugin.pluginPageDefaultData = action.value
  }
}
