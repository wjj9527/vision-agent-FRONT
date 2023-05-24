import {$get,$post,$delete,$put} from '../index'

export const menuListGetting = ()=>$get('/background_editor/editor/menu/queryAll')

export const createMenuItemAction = (data:object)=>$post('/background_editor/editor/menu/add',data)

export const deleteMenuItemById = (data:object)=>$delete('/background_editor/editor/menu/deleteById',data)

export const getPageSchema = (data:object)=>$get('/background_editor/editor/menu/queryByMenuId',data)

export const updateMenuName = (data:object)=>$put('/background_editor/editor/menu/edit',data)

export const updateCurrentTargetSchema =(data:object)=> $post('/background_editor/editor/menu/insertOrUpdate',data)

